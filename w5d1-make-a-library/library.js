function driveCar() {

}
//these two are the same, but they are just different ways of handling it
var driveCar = function(doStuff, secretMessage) {
    // console.log(callback)
    // console.log(callback())
    var stuffMessage = doStuff()
    // alert(stuffMessage)

    return function() {
        return 'Hello From Your Car. ' + stuffMessage
    }
    //This particular function is called a closure.
}

//the callback pulls in the greeting that is listed below. The parenthesis run the code.

var greeting = driveCar(function() {
    return 'Zoom!'
})

console.log(greeting())
var msg = greeting()
document.body.innerHTML = greeting()

//if typing an anon function, we use them for using different variables. We pass them into other functions

// driveCar('Hello', 'World',1,2,3, function() {},1,true,'Ha')
