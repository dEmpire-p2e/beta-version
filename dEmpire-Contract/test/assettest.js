const Asset = artifacts.require("Assets");
const Main = artifacts.require("MainGame")
const Miner = artifacts.require("Miner")
const Aureus = artifacts.require("Aureus");

contract("Asset Test", async accounts => {
    it("it should add an asset in ERC721", async () => {
      const asset = await Asset.deployed();
      const miner = await Miner.deployed();
      const main = await Main.deployed();
      const aureus = await Aureus.deployed();
      let price = 1000000000000000;
      await main.addAsset721("Miner",miner.address,price,{from:accounts[0]});

      let data =await main.assetdetails(0)
      console.log(data);
      await main.startgame({from:accounts[0]});
      await main.addAsset1155("Cannon",asset.address,10,{from:accounts[0]});
      let s =await main.assetdetails(1)
      console.log(s);
      await main.mintERC721(0,{from:accounts[0],value:price})
      await main.mintERC1155(1,{from:accounts[0]});
      await main.mintERC1155(1,{from:accounts[0]});
      await main.mintERC1155(1,{from:accounts[0]});
      await main.mintERC1155(1,{from:accounts[0]});
      let da = await asset.balanceOf(accounts[0],0);
      let ba = await aureus.balanceOf(accounts[0]);
      console.log(da)
      console.log(ba);

      await main.lockBase([0,2],1,{from:accounts[0]});
      da = await asset.balanceOf(accounts[0],0);  
      console.log(da);
      await main.lockBase([0,0],1,{from:accounts[0]});
      da = await asset.balanceOf(accounts[0],0);  

      console.log(da);
      await main.mintERC1155(1,{from:accounts[0]});
      await main.mintERC1155(1,{from:accounts[0]});
      await main.mintERC1155(1,{from:accounts[0]});
      await main.mintERC1155(1,{from:accounts[0]});
      da = await aureus.balanceOf(accounts[0]);  
      console.log(da)
      await main.collect(1,{from:accounts[0]});
      da = await aureus.balanceOf(accounts[0]);  
      console.log(da);
    });
  /* it("it should add an asset in ERC1155", async () => {
      const asset = await Asset.deployed();
      const miner = await Miner.deployed();
      const main = await Main.deployed();
      let price = 1000000000000000;
      await main.addAsset1155("Cannon",asset.address,price,{from:accounts[0]});
      let data =await main.assetdetails(1)
      console.log(data);
      await main.addAsset1155("Balloon",asset.address,price,{from:accounts[0]});
      data =await main.assetdetails(2)
      console.log(data);
    
    });*/

    
})  