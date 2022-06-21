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

