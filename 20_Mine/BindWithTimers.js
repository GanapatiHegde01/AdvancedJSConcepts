class Counter {
  constructor(counter = 0, incrementAmt = 1) {
    this.count = counter;
    this.incrAmt = incrementAmt;
  }

  start() {
    setInterval((function () {
        console.log(this.count);
        this.count+=this.incrAmt;
    }).bind(this), 1000);
  }
}

