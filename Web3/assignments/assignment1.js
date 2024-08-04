//Assignment 1 - Web3 Cohort - Harkirat

//Non-Original Soln - Built by Reference to notes

//Importing the Crypto package
const crypto = require('crypto')



//Function that takes Prefix as input
//Via Brute Forcing the inputs into function logic, we are able to find the required input string that fits the precondition.

function findHashThatStartsWithPrefix(prefix)
{
  let input = 0;
  while(true){
    let inputString = input.toString();
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
console.log(`Input was :${result.input}`);
console.log(`Hash is :${result.hash}`);


