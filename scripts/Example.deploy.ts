import { run, ethers } from "hardhat"

async function main() {
  await run("compile")

  const Example = await ethers.getContractFactory("Example")
  const example = await Example.deploy()

  await example.deployed()

  console.log("Example contract deployed to:", example.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
