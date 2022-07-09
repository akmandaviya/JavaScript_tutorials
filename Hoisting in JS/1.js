var x = 5;

function myName () {
  console.log("My name is AbdulKarim");
}
myName();
console.log(x);

//now see the magic

getName(); // --> Hello world
console.log(y); // --> undefined

var y = 6;
function getName() {
    console.log("Hello World");
}



// *** Temporal Dead Zone ***

// time taken between hoisting and initialization of variable

// console.log(a) == > refernce error a is not defined

// let a = 10 == > refernce error a cannot accessed before initialization

