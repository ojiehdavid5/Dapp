const {ethers,run}= require("hardhat");
require("dotenv").config();



async function main(){
  const simpleStorageFactory= await ethers.getContractFactory("SimpleStorage");

  console.log("deploing contract ....");

  const simpleStorage=  await simpleStorageFactory.deploy({gasPrice:10000000000});
  console.log(simpleStorage.target);

  // if(network.config.chainId===4 && process.env.API_KEY){
  //   await simpleStorage.deploymentTransaction.wait(6);
  //    await verify(simpleStorage.runner.address,[])
  // }



  const currentNumber=await simpleStorage.retrieve();

  const storeNumber=await simpleStorage.store("6");

  const updatedNumber=await simpleStorage.retrieve();
  console.log(currentNumber.toString());
  console.log(storeNumber);

  console.log (updatedNumber.toString());




  

  // console.log(`deployed contract to:${simpleStorage.address}`);
// console.log (simpleStorage.runner.address);
// const deploymentReceipt=await simpleStorage.deploymentTransaction.wait(1);
// console.log(deploymentReceipt);


}

// async function verify (contractAddress,args){
//     console.log("verifying contract");
//     try{
//       await run  ("verify:verify",{
//         address:contractAddress,
//         constructorArguments:args
//       });
//     }catch(e){
//       if(e.message.toLowerCase.includes("already verify contract")){
//         console.log("Already Verified");
//       }else{
//         console.log(e);
//       }
//     }
    

//   }



main().then (()=>process.exit(0)).catch((err)=>{
  console.error(err)
  process.exit(1)
}
)
