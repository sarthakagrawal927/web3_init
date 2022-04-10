// 1. Setup environment
import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("HelloWorld", function () {
  it("should return 'Hello, world!'", async function () {
    // 2. Deploy contract
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();
    await hello.deployed();

    expect(await hello.sayHello()).to.equal("Hello, World!");
  });
});
