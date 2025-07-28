class Timer {
  constructor() {
    this.tick = 0;
    this.timerId = null;
  }

  start() {
    this.timerId = setInterval((function () {
      console.log(this.tick++);
       if(this.tick>5){
        this.stop();
    }
    }).bind(this), 1000);

   
  }

  stop(){
        clearInterval(this.timerId);
  }
}