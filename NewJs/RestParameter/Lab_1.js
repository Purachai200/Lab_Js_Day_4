function multiplyNumbers(...numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  }

  const result1 = multiplyNumbers(2, 3, 4, 5, 6, 7, 8, 9); 
  console.log(result1); // 362880
  
  const result2 = multiplyNumbers(5, 6, 2, 1); 
  console.log(result2); //60
  
  const result3 = multiplyNumbers(); 
  console.log(result3); // 0
  