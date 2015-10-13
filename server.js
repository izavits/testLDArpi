var lda=require('lda');
var fs=require('fs');

// Read data
var btcData=fs.readFileSync('./btcstream.csv', 'utf8');
// Simulate documents (each doc is a sentence)
var documents=btcData.match( /[^\.!\?]+[\.!\?]+/g );
// Run LDA for 2 topics, 5 highest words each
console.log("Running LDA for 5 topics..");
var result=lda(documents, 5, 5);
console.log("..done.");
console.log(result);


