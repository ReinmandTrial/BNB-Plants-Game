require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks:{
    hardhat: {
      accounts: {mnemonic: `${process.env.MNEMONIC}`},
    },
    testnet: {
      accounts: {mnemonic: `${process.env.MNEMONIC}`},
      url: 'https://data-seed-prebsc-1-s3.binance.org:8545'
    },
    binance: {
      accounts: {mnemonic: `${process.env.MNEMONIC}`},
      url: 'https://bsc-dataseed.binance.org'
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: `${process.env.BSCSCANAPIKEY}`
  }, 
  solidity: "0.8.17",
};
