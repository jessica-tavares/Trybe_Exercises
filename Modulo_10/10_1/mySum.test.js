const mySum = require('./mySum');

test('testando soma de Arrays', () => {
  expect(mySum([1, 2, 3, 4])).toEqual(10)
  expect(mySum([1, -2, -3, 4])).toEqual(0)
})