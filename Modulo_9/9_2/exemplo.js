const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = numbers.reduce((sum, number) => (number % 2 == 0) ? sum + number : sum + 0)
console.log(sumEven)