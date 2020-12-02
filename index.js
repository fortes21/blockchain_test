const Blockchain = require("./blockchain/blockchain.js");

const blockchain = new Blockchain()
blockchain.addBlock({ amount: 10 })
blockchain.addBlock({ amount: 89 })

console.log(blockchain)

console.log("Blockcahin é válida? ")
blockchain.blocks[2].data.amount = 89   //transação maliciosa
console.log(blockchain.isValid())
