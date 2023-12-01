const array1 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];

const result1 = array1.filter(word => word.charAt(0).toUpperCase() === 'E');

console.log(result1);
// ผลลัพธ์คือ ['Elephant', 'Eagle']

const array2 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];

const result2 = array2.filter(word => word === word.toUpperCase());

console.log(result2);
// ผลลัพธ์คือ ['APPLE', 'PEACH']

const array4 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];

const result4 = array4.filter(word => word.toLowerCase().includes('buri'));

console.log(result4);
// ผลลัพธ์คือ ['Chonburi', 'Buriram', 'Saraburi']
