import { ethers } from "ethers";

async function hasSigners(): Promise<boolean> {
  //@ts-ignore
  const metamask = window.ethereum;
  const signers = await (metamask.request({
    method: "eth_accounts",
  }) as Promise<string[]>);
  return signers.length > 0;
}

async function requestAccess(): Promise<boolean> {
  //@ts-ignore
  const result = (await window.ethereum.request({
    method: "eth_requestAccounts",
  })) as string[];
  return result && result.length > 0;
}

async function getContract() {
  const address = process.env.CONTRACT_ADDRESS;

  if (!(await hasSigners()) && !(await requestAccess())) {
    console.log("You are in trouble, no one wants to play");
  }

  // @ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(
    address,
    ["function hello() public pure returns(string memory)"], // abi
    provider,
  );

  console.log("We have done it, time to call");
  console.log(await contract.hello());
}

getContract();
