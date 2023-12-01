const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

const indices = [];
alphabets.forEach((element, index) => {
  if (element === 'a') {
    indices.push(index);
  }
});

console.log(indices);
