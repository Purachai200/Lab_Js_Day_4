let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// numPlanets: มีค่าเป็น 8 เนื่องจากมีการดึงค่าจาก facts.numPlanets
// yearNeptuneDiscovered: มีค่าเป็น 1846 เนื่องจากมีการดึงค่าจาก facts.yearNeptuneDiscovered
// ดังนั้น, ผลลัพธ์ที่ได้จาก console.log(numPlanets) คือ 8 และ console.log(yearNeptuneDiscovered) คือ 1846 ตามลำดับ