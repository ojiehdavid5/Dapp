import React from 'react'

import { useState } from 'react';
import {ethers} from 'ethers';
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json"
import './App.css';

//the contract address
const greeterAddress="0x5fbdb2315678afecb367f032d93f642f64180aa3"



function App  () {
  //property variable

  const [message,setMessage]=useState("");



      //Helperfunction
        
      async function requestAccount(){
        await window.ethereum.request({method: 'eth_requestAccount'});
      }
        
  
      async function fetchGreeting(){
  
        if(tyoeof window.ethereum !==  "undefined"){
  
          const provider=new ethers.providers.Web3Provider(window.ethereum);
  
          const  contract=new ethers.Contract(greeterAddress, Greeter.abi, provider);
  
  
  
          try{
            //call Greeter.greet
  
            /*
             function greet() public view returns (string memory) {
      return greeting;
    }
  
            */
  await contract.greet();
  console.log('data',data);
          }catch(error){
            console.log('error',error);
          }
  
  
  
  
        }
      }

      async function setGreeting(){


        if (!message) return;

        if(tyoeof window.ethereum !==  "undefined"){        await requestAccount();


          const provider=new ethers.providers.Web3Provider(window.ethereum);
          const signer=provider.getSigner();
          const  contract=new ethers.Contract(greeterAddress, Greeter.abi, signer);
          const transaction= await contract.setGreeting(message);

          setMessage("");

          await transaction.wait();
          fetchGreeting();


  
  }




      }
  
  return (


    
    <div className='App'>


<div className='App-header'> 
<div className='description'>
<h1>Greeter .sol</h1> 
<h2>Full-Stack Dapp using react and hardhat</h2>

</div>

<div className='custom-buttons'>
<button  onClick={fetchGreeting}   style={{backgroundColor:'red'}}   >Fetch greeting</button>
      <button onClick={setGreeting}   style={{backgroundColor:'green'}}>Set greeting</button>

</div>





      
      <input 
      

      onChange((e) => setMessage(e.target.value))


      value={message};

      
      
      placeholder='enter greeting text'/>


</div>    


        
      
    </div>
  )
}

export default App;


