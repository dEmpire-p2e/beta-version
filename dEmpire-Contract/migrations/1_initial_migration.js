const Migrations = artifacts.require("Migrations");
const Asset = artifacts.require("Assets");
const Miner = artifacts.require("Miner");
const Main = artifacts.require("MainGame");
const Aureus = artifacts.require("Aureus");
module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(Main);
  await deployer.deploy(Asset);
  await deployer.deploy(Miner);
  await deployer.deploy(Aureus);
  miner = await Miner.deployed();
  asset = await Asset.deployed();
  main = await Main.deployed();
  aureus = await Aureus.deployed();

  miner.changeowner(main.address);
  asset.changeowner(main.address);
  aureus.changeowner(main.address);
  main.setmaincurrency(aureus.address);
  await main.addAsset721("Miner",miner.address,web3.utils.toWei('0.1', "ether"));
  await main.addAsset1155("Cannon",asset.address,300);
  //await main.addAsset1155("Xbow",asset.address,200);
  //await main.addAsset1155("Tesla",asset.address,250);
  //await main.addAsset1155("Archer",asset.address,25);
  //await main.addAsset1155("Robot",asset.address,70);
  //await main.addAsset1155("Valkyrie",asset.address,50);
  

  console.log(main.address);
  



};
