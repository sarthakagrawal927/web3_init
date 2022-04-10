import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function foo() {
  const helloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await helloWorld.deploy();
  await hello.deployed();
  return hello;
}

async function deploy() {
  const hello = await foo();
  return hello;
}

// @ts-ignore
async function sayHello(hello) {
  console.log(await hello.sayHello());
}

deploy().then(sayHello);
