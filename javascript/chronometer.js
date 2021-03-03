class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick () {
    this.intervalId = setInterval(() => {this.currentTime++}, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    if (this.currentTime < 60) {
      return this.currentTime;
    } else {
      return this.currentTime-60;
    }
  }
  
  twoDigitsNumber() {
    if (this.getMinutes() < 10) {
      return '0'+this.getMinutes;
    } else if (this.getSeconds() < 10) {
      return '0'+this.getSeconds;
    } else {
    return (this.getSeconds().toString(), this.getMinutes().toString());
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  /*resetClick() {
    // ... set current time to 0
  }
  splitClick() {
    // ... copy current [i]? push to new array?
  }*/
}