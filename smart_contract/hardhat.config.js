require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/THdFXOQpUh2wfFGKbfbWoL5AeJe2yoae",
      accounts: ['06ea1a9ddfc73e1d2a38feb22d804b777bae470f34121863602a3aed6fbe2e1e']
    }
  }
}