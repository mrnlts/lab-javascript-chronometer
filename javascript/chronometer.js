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
  
  /*twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... clear interval
  }
  resetClick() {
    // ... set current time to 0
  }
  splitClick() {
    // ... copy current [i]? push to new array?
  }*/
}