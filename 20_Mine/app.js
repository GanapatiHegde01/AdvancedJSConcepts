// class BankAccount {
//   constructor(accountHolder, accountNumber, balance = 0) {
//     this.accountHolder = accountHolder;
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }

//   deposit(amt) {
//     if (amt > 0) {
//       this.balance = this.balance + amt;
//       console.log(`Deposit amount ${amt} and balance is ${this.balance}`);
//     }
//   }

//   withDraw(amt) {
//     if (this.balance >= amt) {
//       this.balance = this.balance - amt;
//       console.log(`Withdrawn ${amt}. Balance ${this.balance}`);
//     } else {
//       console.log("Insufficient Fund");
//     }
//   }
// }

// New js features

// class Circle{
//   constructor(radius){
//     this._radius = radius;
//   }

//   get diameter() {
//     return this._radius*2;
//   }
// }

// setters

class Circle {
  static allowedColors = new Set(["red", "blue", "green"]);
  constructor(radius, newcolors) {
    this._radius = radius;

    if (Circle.allowedColors.has(newcolors)) {
      this._color = color;
    } else {
      throw new Error("This color is not allowed");
    }
  }

  get radius() {
    return this._radius;  
  }

  get color() {
    return this._color;
  }

  set radius(radius) {
    if (radius > 0) {
      this._radius = radius;
    } else {
      throw new Error("Radius must be greater than zero");
    }
  }

  set color(newcolors) {
    if (allowedColors.has(newcolors)) {
      this._color = newcolors;
    } else {
      throw new Error("This color is not allowed");
    }
  }
}
