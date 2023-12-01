function Person() {
    const name = prompt("Enter name:");
    const lastName = prompt("Enter last name:");
    const hobbiesInput = prompt("Enter hobbies (comma-separated):");
    const hobbies = hobbiesInput.split(',').map(hobby => hobby.trim());
  
    return {
      name,
      lastName,
      hobbies,
      numOfHobbies: hobbies.length
    };
  }
  
  const person = Person();
  console.log(person);
  