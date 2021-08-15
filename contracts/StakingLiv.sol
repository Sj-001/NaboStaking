// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./LivToken.sol";
import "./Referral.sol";
import "./Queue.sol";
// import "./DaiToken.sol";

contract Staking is Referral{

  LivToken public livToken;

  address[] public stakers;
  mapping(address => uint) public stakingBalance;
  mapping(address => bool) public hasStaked;
  mapping(address => bool) public isStaking;
  mapping(address => uint) public rewards;
  mapping(address => Queue) public depositQueue;
  
  
  constructor(LivToken _livToken) Referral(){
     livToken = _livToken;
     owner = msg.sender;
  }
    
    function stakeWithoutParent(uint _amount) public {
        stakeTokens(_amount, address(0));
    }
  function stakeTokens(uint _amount, address _parent) public{

    require(_amount > 0, "amount cannot be 0");
    livToken.transferFrom(msg.sender, address(this), _amount);
    
    
    stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;
    
    if(!hasStaked[msg.sender]) {
      stakers.push(msg.sender);
      depositQueue[msg.sender] = new Queue();
    }
    depositQueue[msg.sender].enqueue(_amount, block.timestamp);
    addUser(_parent);
    distributeDepositCommissions(_amount, msg.sender);
    isStaking[msg.sender] = true;
    hasStaked[msg.sender] = true;
  }
        
    function returnAddress() public view returns(address) {
        return address(this);
    }
  function stakeOf(address _stakeholder)
        public
        view
        returns(uint)
    {
        return stakingBalance[_stakeholder];
    }

  function calculateReward(uint apy, address stakeHolder) public {
      require(!depositQueue[stakeHolder].isEmpty());
        uint256 time = depositQueue[stakeHolder].returnFirstTime();
     while(block.timestamp - time >= 30 seconds){
         depositQueue[stakeHolder].enqueue(depositQueue[stakeHolder].returnFirstAmount(), time + 30 seconds);
        rewards[stakeHolder] += depositQueue[stakeHolder].returnFirstAmount()*apy/uint(100);
        depositQueue[stakeHolder].dequeue();
        
        if(depositQueue[stakeHolder].isEmpty()){
            break;
        }
        time = depositQueue[stakeHolder].returnFirstTime();
     }
    distributeInterestCommissions(rewards[stakeHolder], stakeHolder);
  }

  
    function rewardOf(address _stakeholder) 
        public
        view
        returns(uint)
    {
        return rewards[_stakeholder];
    }

    function withdrawReward() 
        public
    {
        uint reward = rewards[msg.sender] + commissions[msg.sender];
        rewards[msg.sender] = 0;
        commissions[msg.sender] = 0;
        livToken.transfer(msg.sender, reward);
    }

  function unstakeTokens() public {
    uint balance = stakingBalance[msg.sender];
    require(balance > 0, "balance cannot be 0");

    livToken.transfer(msg.sender, balance);
    removeUser(msg.sender);
    stakingBalance[msg.sender] = 0;
    isStaking[msg.sender] = false;
  }
}