var startThis = document.getElementById('start')
var timer
var runIt
var display = document.getElementById('display') //this variable calls out to the id element, display
var start = document.getElementById('start').addEventListener('click', startFunction)
var pause = document.getElementById('start').addEventListener('click', pauseFunction)
var reset = document.getElementById('reset').addEventListener('click', resetFunction)//within these lines, we are adding an event listener (click), so that the click action performs a function

//variables are listed at the top and they are grabbing the id field that they are looking to add content to. They are also adding event listeners that create actions based on a click... in this situation .addEventListener

counter = 1 //the counter was set at 0, but it did not make sense to me for the counter to go from 00 to 0 to 1, so I placed the counter to begin at 1. Now, the timer goes from 00 to 1.

function resetFunction() { //the reset function sets the actions for setting the reset button. It sets the counter back to 0
    clearInterval(timer)
    counter = 0
    display.innerHTML = counter
    startThis.innerHTML = 'Start'
}

function startClock () { //this consistently and incrementally runs the clock after starting
    display.innerHTML = counter //display is listed as the ID of the div that we are displaying the content within
    counter++ //this will add onto the counter by 1, every second
    console.log(counter) //this is to be sure that the clock is working in console
}


function startFunction() { //this function runs the functions that occur when someone presses the start button
    clearTimeout(runIt)
    clearInterval(timer)
    timer = setInterval(startClock, 1000) //this sets the interval so it runs every second
}


document.getElementById('start').addEventListener('click', function (){
    if (this.innerHTML === 'Start' || this.innerHTML === 'Continue') {
        this.innerHTML = 'Pause'
        startFunction()
    } //this states that if the Start or Continue has been pressed, the Pause button will appear
    else {
        pauseFunction()
        this.innerHTML = 'Continue'
    } //if the pause button has been pressed, the Continue button will render
})


document.getElementById('start').addEventListener('dblclick', resetFunction) //the dblclick action is the event listener that is listening to the pause button. When someone double clicks the pause button, it restarts the timer and its set back to 0. 
function pauseFunction() {
    clearInterval(timer)
    runIt = setTimeout(reset, 5000)
}
