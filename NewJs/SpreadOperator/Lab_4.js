const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const mergedArray = [...nums1, ...nums2];
const finalArray = [5, ...nums1, -6, -1, ...nums2];
const sum = finalArray.reduce((acc, curr) => acc + curr, 0);

console.log(finalArray);
console.log(sum);
// = 8
