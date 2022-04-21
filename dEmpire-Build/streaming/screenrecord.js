function recordStart(){
    var elementToRecord = document.getElementById('unity-canvas');
    var recorder = RecordRTC(elementToRecord, {
        type: 'canvas',
        showMousePointer: true,
        mimeType: 'video/webm;codecs=vp9',
        getNativeBlob: true
    });
    recorder.startRecording();
    window.stopCallback = function() {
        window.stopCallback = null;
        recorder.stopRecording(async function() {
            var blob = recorder.getBlob();
            await sendVideoUrl(blob.video_url)
            myGameInstance.SendMessage('WarManager', 'recordUploaded');
        });
    };
}

function makeid(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

document.addEventListener('DOMContentLoaded', function () {
    let webglCanvas = document.getElementById('unity-canvas');
    window.onresize = ()=>{
        console.log('lol')
        if(webglCanvas.style.height%2 != 0){
            webglCanvas.style.height = webglCanvas.style.height-1;
        }
        if(webglCanvas.style.width %2 != 0){
            webglCanvas.style.width = webglCanvas.style.width-1;
        }
        console.log( webglCanvas.style.height)
        console.log( webglCanvas.style.width)
    }
}, false);

async function sendVideoUrl(url){
    await fetch("https://theta.overclockedbrains.co:3030/addVideo", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ videoUrl: url})
    });
}

function downloadVideo(blob){
    var link = document.createElement("a"); // Or maybe get it from the current document
    link.href = URL.createObjectURL(blob);
    link.download = "test.mp4";
    link.style.display = "none";
    link.id = "temp_video_download_url"
    document.body.appendChild(link); // Or append it whereever you want
    document.getElementById('temp_video_download_url').click() 
}
