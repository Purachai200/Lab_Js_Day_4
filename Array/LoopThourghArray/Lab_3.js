function squareArr(arr) {
    const squaredArray = arr.map(number => number ** 2);
    return squaredArray;
  }
  const arr = [2, 3, 5, 7, 11];
  const result = squareArr(arr);
  console.log(result); 
  