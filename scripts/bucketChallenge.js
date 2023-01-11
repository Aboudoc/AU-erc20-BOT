// const ethers = require("ethers");
const { ethers } = require("hardhat");

const bucketAddress = "0x873289a1aD6Cf024B927bd13bd183B264d274c68";
const tokenAddress = "0x5539f51469966EC15495aFa8f74c51C34513556c";
const amount = ethers.utils.parseEther("1");

async function main() {
  const [deployer] = await ethers.getSigners();

  const bucket = await ethers.getContractAt("IBucket", bucketAddress);

  const token = await ethers.getContractAt("BotCoin", tokenAddress);

  await token.connect(deployer).approve(bucketAddress, amount);

  await bucket.connect(deployer).drop(tokenAddress, amount);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
