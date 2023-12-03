let user = {
    name: 'John',
    years: 27
  };
  
  let { name, years: age, isAdmin = false } = user;

  console.log(name);     // ผลลัพธ์: 'John'
  console.log(age);      // ผลลัพธ์: 27
  console.log(isAdmin);  // ผลลัพธ์: false (ถ้าไม่มีค่าใน property isAdmin)
  