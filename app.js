'use strict'
// ||0は、argv[2]が0やundefinedのときの、代入値
const number = process.argv[2] || 0;
let sum = 0;

for(let i = 1 ; i <= number ; i++){
    sum = sum + i;
}
console.log(sum);