const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');
const millisecondsElement = document.querySelector('#milliseconds');
const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
const continueButton = document.querySelector('#continue-button');
const resetButton = document.querySelector('#reset-button');

let chonometer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

const formatTime = time => {
    return time < 10 ? `0${time}` : time;
}

const formatMillisecons = time => {
    return time < 100 ? `${time}`.padStart(3, '0') : time;
}

const startTimer = () => {
    chonometer = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10;

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesElement.innerHTML = formatTime(minutes);
            secondsElement.innerHTML = formatTime(seconds);
            millisecondsElement.innerHTML = formatMillisecons(milliseconds);
        }
    }, 10);

    startButton.style.display = 'none'
    stopButton.style.display = 'block'
}

const stopTimer = () => {
    isPaused = true

    stopButton.style.display = 'none'
    continueButton.style.display = 'block'
}

const continueTimer = () => {
    isPaused = false

    stopButton.style.display = 'block'
    continueButton.style.display = 'none'
}

const resetTimer = () => {
    clearInterval(chonometer);

    isPaused = false;
    
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesElement.innerHTML = '00';
    secondsElement.innerHTML = '00';
    millisecondsElement.innerHTML = '000';

    startButton.style.display = 'block'
    stopButton.style.display = 'none'
    continueButton.style.display = 'none'
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
continueButton.addEventListener('click', continueTimer);
resetButton.addEventListener('click', resetTimer)