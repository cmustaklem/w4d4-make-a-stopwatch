//global variables that are being called upon within the functions
var button = document.querySelector('#theBtn') //this variable is pulling in the start button and its data.
var timer;
var clearTime;
var i = 0;
var _10thSecond = 0;
var _second = 0;
var _minute = 0;
var theTimer = document.querySelector('#theTimer') //theTimer is the id of the p tag that houses the text of the timer.
var _seconds;

//the The clearInterval() method clears a timer set by the setInterval() Method, which is increasing the timer at an interval of .1 seconds.


function btnStatus(){
    clearInterval(timer)
    clearTimeout(clearTime)
    if (button.innerHTML === 'Start!' || button.innerHTML === 'Continue') {
        button.innerHTML = 'Pause';
        startInterval();
    }
    else if (button.innerHTML === 'Pause') {
        button.innerHTML = 'Continue';
        pauseTime();
    }
}

//This function is meant to start the Interval and sets up a recurring timer. The function has code that updates the timer variable so that when the startInterval function is called, it increments the clock by a tenth of a second.
function startInterval(){
    timer = setInterval(incrementByOne, (.1 * 1000));
}
//Create function to start counting by increments of 1 for the tenth of seconds, then after 10, it adds 1 to the second, and once there are 60 seconds, the minute field gets incremented by one and the seconds field gets set back to 00. changeColor() is being invoked after every 10 milliseconds.
function incrementByOne(){
    _10thSecond++
    if (_10thSecond > 9) {
        _10thSecond = 0;
        _second++;
        changeColor();
    }
    else if(_second > 59) {
        _second = 0;
        _minute++;
    }
    _seconds = (_second >= 0 && _second < 10)  ? '0' + _second : _second;
    _minutes = (_minute >= 0 && _minute < 10)  ? '0' + _minute : _minute;
    theTimer.innerHTML = 'Time: ' + _minutes + ':' + _seconds + ':' + _10thSecond;
    console.log(_seconds);
}


function pauseTime(){
    clearInterval(timer);
    setTimeClear();
}

//setTimeClear function is setting the timer back to the original value after 5 seconds of being paused. It is enabling the eraseTimer function after 5 seconds.

function setTimeClear(){
    clearTime = setTimeout(eraseTimer, (5 * 1000));
}

//the eraseTimer function is clearing the timer and setting it back to Time: 00:00:00, which is the original value. theTimer.innerHTML = 'Time: ' + _minutes + ' : ' + _seconds + ' : ' + _10thSecond; states the order of the values for minutes, seconds and tenth of seconds, and sets it back to 0

function eraseTimer(){
    clearInterval(timer);
    clearTimeout(clearTime);
    theTimer.innerHTML = 'Time: 00:00:00';
    _10thSecond = 0;
    _second = 0;
    _minute = 0;
    button.innerHTML = 'Start!';
}

//Math.floor is returning a random number thats the largest integer less than or equal to a given number. It is creating a value for the r, g or b variables, which is creating an rgb value. The querySelector is creating the value of the rgb variable that is generating a random color.

function changeColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var rgb = 'rgb('+ r + ','+  g + ',' + b + ')';
    document.querySelector('body').style.background = rgb; //this querySelector can only be used within this function for the color to change. When placed outside of the function, it cannot grab the rgb variable that is housed within this function.
}


//These are the event listeners that are being enacted when someone clicks or double clicks the button on the page.

document.querySelector('#theBtn').addEventListener('click', btnStatus)
document.querySelector('#theBtn').addEventListener('dblclick',eraseTimer);
