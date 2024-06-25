//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";


contract Ownable{
    address owner;

    modifier onlyOwner(){
        require(msg.sender==owner,"must be the owner");

        _;
    }
}


contract SecretVault{
    string secret;
        constructor  (string memory _secret) {
    secret=_secret;

}

function getSecret()  public view  returns(string memory){

    return secret;


}

}


contract MyContract is Ownable{

    string secret;


    



    constructor  (string memory _secret) payable {
        
        SecretVault _secretVault= new SecretVault(_secret);








        


           super;

}


function getSecret()  public view onlyOwner returns(string memory ){

    return secret;


}
}


