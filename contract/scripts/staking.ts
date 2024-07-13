const stik = require('hardhat');

async function stook() {
    const Staking = await stik.ethers.getContractFactory("Staking");
    const staking = await Staking.deploy('0xCe1370E6013989185ac2552832099F24a85DbfD4', '0xB3faFE3b27fCB65689d540c5185a8420310d59dA'); //StakeTokenTokenAddress and Reward token address

    // No need to call deployed()

    console.log("Staking deployed at:", staking.target);
}

stook().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


//0xc050897faEe2b399F5E6cB73517d9380669665f8
