const myIndexOf = require('./myIndexOf');

test('testando MyIndexOf', () => {
  expect(myIndexOf([1, 2, 3, 4], 3)).toEqual(2)
  expect(myIndexOf([1, 2, 3, 4], 5)).toEqual(-1)
})