const assert = require('assert');

function secondThirdSmallest(array) {
    const ordenado= array.sort(function (x, y) {
      return (x - y);
  });
    const results = [ordenado[1], ordenado[2]];
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
/*
  Use a variável parameter como parâmetro da função acima, escreva testes
  para verificar se a mesma está retornando a como se vê na variável result
  e, caso não esteja, altere o código para que ele passe nos testes.
  Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
  a função aos poucos:
*/
assert.strictEqual(typeof (secondThirdSmallest), 'function');
assert.deepEqual(secondThirdSmallest(parameter), result);
