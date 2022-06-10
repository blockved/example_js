
const Web3 = require('web3');

const { ethers } = require("ethers");


let web3 = new Web3('https://nodes.mewapi.io/rpc/eth');


//https://learnblockchain.cn/article/1792
web3.eth.ens.getAddress("nickyeth.eth").then(function (address) {
    console.log(address);
})



const provider = new ethers.providers.JsonRpcProvider("https://nodes.mewapi.io/rpc/eth");
var address = "0x893820b69dd0d9e805c988d97d84d073ed089833";
provider.lookupAddress(address).then(function (address) {
    console.log(address);
})

