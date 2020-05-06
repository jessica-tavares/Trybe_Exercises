const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.equal(sum(4,5),9, "O resultado é 9!")
assert.equal(sum(0,0),0, "O resultado é 0!")
assert.throws(() => {sum(4,"5")}, Error)