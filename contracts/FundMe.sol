//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import "./PriceConverter.sol";

contract FundMe {
    using PriceConverter for uint256;

    uint256 public minimumUsd = 50 * 1e18;
    address[] public funders;
    mapping(address => uint256) public AddressToAmountFunded;

    function fund() public payable {
        require(msg.value.getConversionRate() >= minimumUsd, "no much money");
        funders.push(msg.sender);
        AddressToAmountFunded[msg.sender] += msg.value;
    }
    function withdraw()public {
        for(uint256 funderIndex=0; funderIndex<funders.length; funderIndex++){
            address funder=funders[funderIndex];
            AddressToAmountFunded[funder]=0;

        }

        funders=new address[](0);
        ///how to send ether to a particular address
        //transfer
        //send
        //call
    }
}
