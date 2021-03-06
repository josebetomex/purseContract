require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-interface-generator");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    rinkeby: {
     url: "https://rinkeby.infura.io/v3/9054e960e8f44c8fb75530099cac5ef0",
     chainId: 4,
     accounts: [`${process.env.PRIVATE_KEY}`],
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/9054e960e8f44c8fb75530099cac5ef0",
      chainId: 1,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    hardhat: {
      allowUnlimitedContractSize: true,
      blockGasLimit: 8000000
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    token: 'AVAX',
    showTimeSpent: true,
  },
  etherscan: {
    apiKey: process.env.SNOWSCAN_API_KEY,
  },
};
