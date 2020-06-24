const sum = require('./sum');

test('soma valores', () => {
  expect(sum(4, 5)).toEqual(9)
  expect(sum(0, 0)).toEqual(0)
  expect(() => sum(4, "5")).toThrow('parameters must be numbers');
})