const array1 = ['apple', 'banana', 'orange', 'pineapple', 'watermelon'];

const result1 = array1.filter(word => word.length > 6);

console.log(result1);
// ผลลัพธ์คือ ['banana', 'pineapple', 'watermelon']

const array2 = [1, -3, 2, 8, -4, 5];

const result2 = array2.filter(number => number > 0);

console.log(result2);
// ผลลัพธ์คือ [1, 2, 8, 5]

const array3 = [1, 3, 4, 5, 6, 7, 8];

const result3 = array3.filter(number => number % 3 === 0);

console.log(result3);
// ผลลัพธ์คือ [3, 6]
