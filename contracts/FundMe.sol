//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import "./PriceConverter.sol";

contract FundMe {

    using PriceConverter for uint256;
    uint256 public constant  minimumUsd = 50 * 1e18;




    AggregatorV3Interface  public priceFeed;
    address[] public funders;


    mapping(address => uint256) public AddressToAmountFunded;
        address  public immutable i_owner;
        error notOwner();









   
     constructor(address priceFeedAddress){
        i_owner=msg.sender;





        priceFeed= AggregatorV3Interface(priceFeedAddress);





    }

    function fund() public payable {
        require(msg.value.getConversionRate() >= minimumUsd, "no much money");
        funders.push(msg.sender);
        AddressToAmountFunded[msg.sender] += msg.value;
    }

   
    function withdraw()onlyOwner public {
        for(uint256 funderIndex=0; funderIndex<funders.length; funderIndex++){
            address funder=funders[funderIndex];
            AddressToAmountFunded[funder]=0;

        }

        funders=new address[](0);
(bool callSuccess, ) = payable(msg.sender).call{value:address(this).balance}("");
        require(callSuccess,"call failed");
        ///how to send ether to a particular address
        //transfer
        //send
        //call
    }
    modifier onlyOwner{
       // require(i_owner==msg.sender,"your are not the owner of the deployed contract");
       if(msg.sender!=i_owner){
        revert notOwner();
       }
        _;

    }
    //what happens when some send eth on this contract without calling the fund function
//receive();
//fallback();

receive() external payable {
    fund();



 }

 fallback() external payable {
    fund();
  }
}

