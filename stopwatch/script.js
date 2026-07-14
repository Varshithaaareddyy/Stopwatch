// Variables
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.getElementById('display');
let int = null;
let lapCount = 0;

// Start function
function start() {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10); // 10ms = 1 centisecond
}

// Pause function
function pause() {
    clearInterval(int);
}

// Reset function
function reset() {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = '00 : 00 : 00 : 00';
    document.getElementById('lapsList').innerHTML = '';
    lapCount = 0;
}

// Lap function
function lap() {
    if (int !== null) {
        lapCount++;
        let lapTime = timeRef.innerHTML;
        let lapItem = document.createElement('li');
        lapItem.innerHTML = `Lap ${lapCount}: ${lapTime}`;
        document.getElementById('lapsList').prepend(lapItem);
    }
}

// Timer display logic
function displayTimer() {
    milliseconds += 10;
    
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}