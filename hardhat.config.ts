import "dotenv/config"

import { HardhatUserConfig } from "hardhat/config"

import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"

import "hardhat-gas-reporter"

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      accounts: {
        mnemonic: process.env.MNEMONIC || "",
        count: 5,
      },
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/2afd96fdd00a4e9bb07f38a9f5363c41",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  gasReporter: {
    currency: "EUR",
  },
}

export default config
