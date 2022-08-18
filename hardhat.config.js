// https://eth-goerli.g.alchemy.com/v2/8p1mn-UqT2XufwxFWoB6CyA1q4kOPUbN
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",
  networks:{
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/8p1mn-UqT2XufwxFWoB6CyA1q4kOPUbN",
      accounts: [
        "71520f92d157a14c54bec7c53c915c0b191f8582dbdc9a22e99cf5a161a8872f",
      ]
    }
  }
};
