
//variable declaration
// var x = 'pizza'
// x = 'Cheese'
//
// function example() {
//     var x = 'Soda'
//     console.log(x)
// }
//
// example()
//
// console.log(x)


// var pizza = 'Pizza'
//
// var changePizza = function(topping, price) {
//     pizza = topping
//     alert(pizza)
//     alert(price)
// }
//
// changePizza('Hawaiian Pizza', 11.99)
//
// console.log(pizza)
// console.log(changePizza)
// console.log(changePizza)

// for(let i = 0; i < 10000; i++) {
//
// }

// one()
//
// console.log(4)
//
// function one() {
//     console.log(1)
//     two()
// }
// function two() {
//     console.log(2)
//     three()
// }
// function one() {
//     console.log(3)
// }


// function increaseCounter() {
//     console.log('Running increaseCounter() function')
//     counter++
// }
//
// var counter = 0
//
// setInterval(increaseCounter, 1000) //1000 seconds from the end of the script
// //
// // console.log(1)
// // console.log('Script finished running')
//
// fetch('http://swapi.co/api/')
//     .then(response => console.log('Ran fetch() Function'))

//two global variables that are on every browser
// console.log(window.document) //everything falls within this
// console.log(document) //the entire HTML document

// console.dir(document.body)
// console.dir(document.querySelector())

var scripts

console.log('We are looking for stuff.')
scripts = document.querySelectorAll('script')
console.log(scripts)
console.log('We found stuff')


var myCustomTag = {
    tagName: 'custom',
    className: 'col-sm-6'
}
