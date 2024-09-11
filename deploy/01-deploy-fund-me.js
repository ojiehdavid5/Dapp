// module.exports=async(hre)=>{
//     const{getNamedAccounts,deployments}=hre;
//     const{deploy,log}=deployments;
//     const{deployer} =await getNamedAccounts();
//     const chainId=network.config.chainId;


//     //well what happens when we want to change chains
// //when going for localhost or hardhat we want to use mock
// }

function deployFunc(){
    console.log('Hi');

}
module.exports.default=deployFunc;