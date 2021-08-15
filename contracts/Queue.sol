//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Queue {
    mapping(uint256 => Data) public queue;
    uint256 public first = 1;
    uint256 public last = 0;
    struct Data{
        uint amount;
        uint256 timestamp;        
    }
    
    constructor() {
        
    }
    
    function currBlockNumber() public view returns(uint256){
        return block.timestamp;
    }
    function enqueue(uint _amount, uint256 _timestamp) public {
        last += 1;
        queue[last] = Data({
            amount: _amount,
            timestamp: _timestamp
            
        });
    }
    
    function returnFirstTime() public view returns(uint256){
        return queue[first].timestamp;
    }
    
    function returnFirstAmount() public view returns(uint){
        return queue[first].amount;
    }

    function dequeue() public {
        require(last >= first);  // non-empty queue

        delete queue[first];
        first += 1;
    }
    
    function isEmpty() public view returns(bool){
        if(first > last){
            return true;
        }
        return false;
    }
}