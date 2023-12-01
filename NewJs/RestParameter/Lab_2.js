function filterOutOdds(...numbers) {
    return numbers.filter(number => number % 2 === 0);
  }
  const result1 = filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13); 
  console.log(result1); // [ 2, 4, 6, 8, 10, 12 ]
  
  const result2 = filterOutOdds(7, 8, 9, 10, 11, 12); 
  console.log(result2); // [ 8, 10, 12 ]
  
  const result3 = filterOutOdds(); 
  console.log(result3); // []
  