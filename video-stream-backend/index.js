const express = require('express')
const cors = require('cors')
const MongoClient = require("mongodb").MongoClient;

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

const uri = "MONGO_DB_SRV"
const client = new MongoClient(uri);
let collection;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ffmpeg', async (req, res) => {
    try{
        const data = await collection.find().sort({ _id: -1}).limit(5).toArray();
        let out = `ffconcat version 1.0`;
        for(let value of data){
            let url = value.url;
            out += `\nfile ${url}`
        }
        console.log("FFmpeg Playlist Refreshed!");
        out += `\nfile http://127.0.0.1:3000/ffmpeg`;
        res.send(out)
    }catch(e){
        let out = `ffconcat version 1.0\nfile https://rtsvideo.b-cdn.net/videos/VEFbQr48.mp4`;
        out += `\nfile http://127.0.0.1:3000/ffmpeg`;
        res.send(out)
    }
})

app.post('/addVideo', async (req, res) => {
    if(req.body.videoUrl){
        const doc = {
            url: req.body.videoUrl
        }
        await collection.insertOne(doc);
    }
    res.send();
})

async function run(){
    await client.connect();
    const database = client.db('rtsTheta');
    collection = database.collection('videos');
    app.listen(port, () => {
        console.log(`http://127.0.0.1:${port}`)
    })
}



run();