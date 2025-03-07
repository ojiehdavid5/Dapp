 //SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";


library PriceConverter{
    function getPrice() internal  view returns(uint256) {
        //ABI


        //Address 0x694AA1769357215DE4FAC081bf1f309aDC325306
        AggregatorV3Interface priceFeed= AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);


        (
            /* uint80 roundID */,





            int answer,




            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();

return uint256(answer* 1e10);
        
    }

    function getConversionRate(uint ethAmount) internal view returns(uint256){
        //ABI
        //Address 0x694AA1769357215DE4FAC081bf1f309aDC325306
        uint256 ethPrice=getPrice();
        uint256 ethAmountInUsd=(ethPrice*ethAmount)/1e18;
        return ethAmountInUsd;

    }
}
