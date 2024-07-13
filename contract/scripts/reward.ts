const rew = require('hardhat');

async function rewad() {
    const RewardToken = await rew.ethers.getContractFactory("RewardToken");
    const rewardToken = await RewardToken.deploy(10000000);
    // No need to call deployed()

    console.log("RewardToken deployed at:", rewardToken.target);
}

rewad().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

// 0xB3faFE3b27fCB65689d540c5185a8420310d59dA


