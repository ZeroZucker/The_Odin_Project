// aks user for input
// print every number between 1 and the number (excluded)
// if number dividable by 3 and or 5 print fizz, buzz or both


const prompt = require('prompt-sync')();

const number = prompt("your number: ");

for (let counter = 1; counter < number; counter++) {
    console.log(counter);
}


