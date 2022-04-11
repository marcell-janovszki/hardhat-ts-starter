import { ethers } from "hardhat"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

describe("Example", function () {
  let accounts: SignerWithAddress[]

  beforeEach(async function () {
    accounts = await ethers.getSigners()
  })

  it("should do something right", async function () {
    for (let account of accounts) {
      console.log(account.address)
    }
  })
})
