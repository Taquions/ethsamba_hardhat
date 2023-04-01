require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/696377e705ec427581302f66dc7b93bd",
      accounts: {
        mnemonic: "fox joy sibling game tortoise antique worry habit add swamp hen select"
      }
    }
  },
  etherscan: {
    apiKey: {
      sepolia: "WZ7WPJRZKZR7RA4VD85I2FBY9CZURESJI3",
    }
  },

  solidity: {
    version: "0.8.14",
  }
 
}
