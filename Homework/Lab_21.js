let arr = [1, [2, [[[3, 4], 5], 6]]];

// Array destructuring
let [a, [b, [[c, d], e], f]] = arr;

console.log(a); // ผลลัพธ์: 1
console.log(b); // ผลลัพธ์: 2
console.log(c); // ผลลัพธ์: 3
console.log(d); // ผลลัพธ์: 4
console.log(e); // ผลลัพธ์: 5
console.log(f); // ผลลัพธ์: 6
