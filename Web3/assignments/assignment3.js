//Assignment 1 - Web3 Cohort - Harkirat

//Non-Original Soln - Built by Reference to notes

//Importing the Crypto package
const crypto = require('crypto')



//Function that takes Prefix as input
//Here we add the prefix string, and then specifically return the nonce which gave the required output (with required hash prefix)

function findHashThatStartsWithPrefix(prefix)
{
  let input = 0;
  while(true){
    let inputString = `
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
` + input.toString();
    let hashString = crypto.createHash('sha256').update(inputString).digest('hex');
    if(hashString.startsWith(prefix)){
      return {
        input: inputString, hash: hashString};
      }
      input++;
    }
    
  }  



//Running the function, printing the Output once while loop exited
const result = findHashThatStartsWithPrefix('00000')
console.log(`Input String was :${result.input}`);
console.log(`Hash is :${result.hash}`);


