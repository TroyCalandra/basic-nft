const HDWalletProvider = require("@truffle/hdwallet-provider");
require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () => new HDWalletProvider('', 'https://ropsten.infura.io/v3/5f656cd2dda844be8a102549be7c1f6c'),
      network_id: 3, // Ropsten's id
      gas: 8000000, // Ropsten has a lower block limit than mainnet
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.2",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
