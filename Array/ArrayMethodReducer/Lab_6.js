let str = '31 45 12 67 34 86 23 37 19 41';
const numbers = str.split(' ').map(Number);
const sum = numbers.filter(number => number < 40).reduce((acc, curr) => acc + curr, 0);

console.log(sum);
