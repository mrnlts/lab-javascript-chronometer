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
  
  twoDigitsNumber(input) {
    if (input < 10) {
      return '0'+ input;
    } else {
    return input.toString();
    }
  }
  
  stopClick() {
    clearInterval(this.intervalId);
  }
  
  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}