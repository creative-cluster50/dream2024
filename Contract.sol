// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    uint256 public myVariable;

    constructor() {
        myVariable = 0;
    }

    function setVariable(uint256 newValue) public {
        myVariable = newValue;
    }
}
