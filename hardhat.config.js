require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();
const JSON_RPC=process.env.JSON_RPC;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
const API_KEY=process.env.API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"hardhat",

  solidity: "0.8.19",
  paths:{
    artifacts:"./src/artifacts",
  },

  networks: {
localhost:{
  url:JSON_RPC,
  // account:[PRIVATE_KEY],
  chainId:31337,
},
// etherscan: {
//   // Your API key for Etherscan
//   // Obtain one at https://etherscan.io/
//   apiKey: API_KEY
// },
// sourcify: {
//   // Disabled by default
//   // Doesn't need an API key
//   enabled: true
// }

  }
};
