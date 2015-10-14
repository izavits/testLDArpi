var lda=require('lda');
var fs=require('fs');
var led= require("pi-pins").connect(22);

// set pin 22 as an output
led.mode('out');
led.value(false);

// Read data
var btcData=fs.readFileSync('./btcstream.csv', 'utf8');
// Simulate documents (each doc is a sentence)
var documents=btcData.match( /[^\.!\?]+[\.!\?]+/g );
// Run LDA for 2 topics, 5 highest words each
console.log("Running LDA for 2 topics..");
var result=lda(documents, 2, 5);
console.log("..done.");

led.value(true);
setTimeout(function() {
    led.value(false);
}, 3000);

console.log(result);


