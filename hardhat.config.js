require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const { API_KEY, MAINNET_RPC_URL, TESTNET_RPC_URL, WALLET_PRIVATE_KEY } = process.env;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: 'ethereum',
  networks: {
    goerli: {
      url: TESTNET_RPC_URL,
      accounts: [WALLET_PRIVATE_KEY],
    },
    ethereum: {
      url: MAINNET_RPC_URL,
      accounts: [WALLET_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: API_KEY,
  },
};
