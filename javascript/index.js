const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let minDec = document.getElementById('minDec');
  minDec.innerText = JSON.stringify(minutes).slice(0,1); 
  let minUni = document.getElementById('minUni');
  minUni.innerText = JSON.stringify(minutes).slice(1);
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let secDec = document.getElementById('secDec');
  secDec.innerText = JSON.stringify(seconds).slice(0,1); 
  let secUni = document.getElementById('secUni');  
  secUni.innerText = JSON.stringify(seconds).slice(1); 
}

// ==> BONUS
// function printMilliseconds() {
//   let milDec = document.getElementById('milDec');
//   let milUni = document.getElementById('milUni');
// }

// function printSplit() {
//   let splits = document.getElementById('splits');
// }

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.classList.add('stop');
  btnLeft.innerText = "STOP";
  btnLeft.classList.remove('start');
}

function setSplitBtn() {
  btnRight.classList.add('split');
  btnRight.innerText = "SPLIT";
  btnRight.classList.remove('reset');
}

function setStartBtn() {
  btnLeft.classList.add('start');
  btnLeft.innerText = "START";
  btnLeft.classList.remove('stop');
}

function setResetBtn() {
  btnRight.classList.add('reset');
  btnRight.innerText = "RESET";
  btnRight.classList.remove('split');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    chronometer.startClick();
    this.printTime();
    this.setStopBtn(); 
    this.setSplitBtn();
  } else {
    chronometer.stopClick();
    this.setStartBtn();
    this.setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
});
