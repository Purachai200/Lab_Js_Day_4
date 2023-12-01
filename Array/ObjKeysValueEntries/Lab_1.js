// Obj Keys,Values
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   const keys = Object.keys(salaries);
//   const values = Object.values(salaries);
  
//   let sum = 0;
  
//   for (let i = 0; i < keys.length; i++) {
//     sum += values[i];
//   }
  
//   console.log(sum);
  
// Obj entires
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  const entries = Object.entries(salaries);
  let sum = 0;
  for (const [key, value] of entries) {
    sum += value;
  }
  console.log(sum);