const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

test('testando a funçao, de nome gigante', () => {
  const arr = [1, 2, 3, 4];

  expect(myRemoveWithoutCopy(arr, 5)).toEqual(arr)
  expect(myRemoveWithoutCopy(arr, 3)).toEqual([1, 2, 4])
  expect(myRemoveWithoutCopy(arr, 3)).not.toEqual([1, 2, 3, 4])
  myRemoveWithoutCopy(arr)
  
})