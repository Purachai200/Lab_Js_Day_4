class Calculator {
    constructor(initialValue = 0) {
      this.value = initialValue;
    }
  
    add(number) {
      this.value += number;
    }
  
    subtract(number) {
      this.value -= number;
    }
  
    multiply(number) {
      this.value *= number;
    }
  
    divide(number) {
      if (number !== 0) {
        this.value /= number;
      } else {
        console.error("Error: Division by zero");
      }
    }
  
    show() {
      alert(this.value);
    }
  }
  
  const myCalculator = new Calculator(10);
  
  myCalculator.add(2);
  myCalculator.show(); // ผลลัพธ์คือ 12
  
  myCalculator.subtract(8);
  myCalculator.show(); // ผลลัพธ์คือ 4
  
  myCalculator.multiply(4);
  myCalculator.show(); // ผลลัพธ์คือ 16
  
  myCalculator.divide(3);
  myCalculator.show(); // ผลลัพธ์คือ 5.33
  