//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


import "hardhat/console.sol";


contract MyContract{

   

    mapping(uint=>string) public names;
    mapping(uint=>Book) public books;
    mapping(address=>mapping(uint=>Book)) public myBooks;


    struct Book{
        string title;
        string author;
    }

    constructor(){
        names[0]='chuks';
        names[1]='davies';
        names[2]='sam';
        names[3]='tobi';
        names[4]='naomi';
    }

   

    function addBooks( uint _id, string memory _title, string memory _author) public{

books[_id]=Book(_title,_author);

    }
     function addMyBooks (uint _id,string memory _title, string memory _author) public{

        myBooks[msg.sender][_id]=Book(_title,_author);
     }


     

}