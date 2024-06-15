//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HotelRooom{
    //Ether payment
    //Modifiers
    //Visibility
    //Events
    //Enums
//
enum Statuses{Vacant,Occupied}


address payable public owner;


constructor(){
    owner=msg.sender;
}


    


    function books() {
        owner.transfer(msg.value);



        

    

    }


}