//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


contract Transactions{
  struct TransferStruct {
    address sender;
    address receiver;
    uint amout;
  }

  TransferStruct[] transactions;

  event Transfer(address from, address receiver, uint amount);

  function addToBlockchain(address payable receiver, uint amount) public {
    transactions.push(TransferStruct(msg.sender, receiver, amount));

    emit Transfer(msg.sender, receiver, amount);
     
  }
}
