class Sale {
    constructor(name) {
      this.name = name;
    }
  
    calcPrice(price, discount) {
      return price * (1 - discount);
    }
  }
  
  class Beverage extends Sale {
    constructor(name, amount, price, discount) {
      super(name);
      this.amount = amount;
      this.price = price;
      this.discount = discount;
    }
  
    calcPrice() {
      const totalPrice = this.amount * super.calcPrice(this.price, this.discount);
      return totalPrice;
    }
  }
  
  // ตัวอย่างการใช้งาน
  const beverage = new Beverage("Pepsi", 3, 19, 0.1);
  const totalPrice = beverage.calcPrice();
  
  console.log(`Total Price: $${(totalPrice).toFixed(2)}`);
  