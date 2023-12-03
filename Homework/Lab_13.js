let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); // [10, 30, 20]

// numbers เป็น [10, 20, 30], บรรทัดที่ให้มี numbers[1] และ numbers[2] ถูกสลับค่ากันในขั้นตอนนี้:
// [numbers[1], numbers[2]] จะกลายเป็น [30, 20]
// numbers[1] จะมีค่าเป็น 30 (ค่าใหม่ที่ได้จากการสลับ)
// numbers[2] จะมีค่าเป็น 20 (ค่าใหม่ที่ได้จากการสลับ)
// ดังนั้น, numbers หลังจากนี้จะกลายเป็น [10, 30, 20]. ผลลัพธ์ที่ได้จาก console.log(numbers) คือ [10, 30, 20]