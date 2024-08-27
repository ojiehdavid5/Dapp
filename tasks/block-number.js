const  {task} =require("hardhat/config");


task("block number","Print the current block number").setAction(
    async(taskArgs,hre)=>{
        const blockNumber=hre.ethers.provider.getBlockNumber();
        console.log(`current block numberis ${blockNumber}`);
        
    }
    
)