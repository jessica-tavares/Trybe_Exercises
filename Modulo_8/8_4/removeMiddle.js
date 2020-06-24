const assert = require('assert');
// escreva a função removeMiddle para passar nos testes abaixo:
function removeMiddle(arr) {
  let position = 0 ;
  let resultMiddle = [];
  let result = [];
  if (arr.length%2 != 0) {
    position = Math.floor((arr.length/2));
  } else {
    position = (arr.length/2)-1;
  }
  for (let i in arr){
    if ( i == position){
      resultMiddle.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return resultMiddle && result
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords); //what??
