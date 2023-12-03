let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
   };
   let { numPlanets, ...discoveryYears } = planetFacts;
   console.log(discoveryYears); // * { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }
   
// numPlanets: มีค่าเป็น 8 เนื่องจากมีการดึงค่าจาก planetFacts.numPlanets
// ...discoveryYears: จะมีค่าเป็น Object ที่เก็บค่าที่เหลือทั้งหมดใน planetFacts ที่ไม่ได้ถูกดึงไปในตัวแปร numPlanets คือ { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }
// ดังนั้น, ผลลัพธ์ที่ได้จาก console.log(discoveryYears) คือ { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }