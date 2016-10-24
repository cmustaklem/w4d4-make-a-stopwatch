// var name = 'Christy'
//
// function runsLater() {
//     alert(name)
// }
//
// var firstTimeout = setTimeout(runsLater, 5000)
// console.log(firstTimeout)
//
// var secondTimeout = setTimeout(function() {
//     alert('This comes later.')
// }, 5000)
// console.log(secondTimeout)
//
// clearTimeout(firstTimeout)
// clearTimeout(secondTimeout)
// var actionTimer
// var counter = 0
//
// document.getElementById('action').addEventListener('click', function() {
//     counter++
//     this.innerHTML = counter
//
//     clearTimeout(actionTimer)
//     actionTimer = setTimeout(() => {
//         counter = 0
//         this.innerHTML = '0'
//         console.log('Happened once.')
//     }, 2000)
// })

// var counter = 0
//
// function doThis() {
//     counter++
//     console.log(counter)
// }
//
// // var timer = setInterval(doThis, 1000)
//
//
//
// document.getElementById('action').addEventListener('click', function() {
//     clearInterval(timer)
//
//     if (this.innerHTML === 'Paused') {
//         start()
//         this.innerHTML = 'Pause'
//     }
//     this.innerHTML = 'Paused'
// })


var animationId
function animationLoop() {
    var circle = document.getElementById('circle')
    var height = Number(getComputedStyle(circle).width.replace('px',''))
    var width = Number(getComputedStyle(circle).height.replace('px',''))

    if (height >= 200 && width >= 200) {
        height = 0
        width = 0
    }

    circle.style.position = 'absolute'
    circle.style.height = height + 1 + 'px'
    circle.style.width = width + 1 + 'px'



    animationId = requestAnimationFrame(animationLoop)
}
animationLoop()


// var animationId
// function animationLoop() {
//     colorred
// }
