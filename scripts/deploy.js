const { ethers, upgrades } = require("hardhat");

async function main() {
  let contract
  console.log('Deploy contracts:')
  const [owner, marketing] = await ethers.getSigners();
  const CONTRACT = await ethers.getContractFactory("BNBPlantsGame");
  contract = await CONTRACT.deploy(marketing.address);
  console.log(`CONTRACT at ${contract.address}`)
}

main();