const myRemove = require('./myRemove');

test('testando myRemove function', () => {
  const arr = [1, 2, 3, 4];
  
  expect(myRemove(arr, 3)).toEqual([1, 2, 4])
  expect(myRemove(arr, 3)).not.toEqual(arr)
  expect(myRemove(arr, 5)).toEqual(arr)
})