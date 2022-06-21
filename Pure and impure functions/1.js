
//impure function:
//they change the value of the outside scope

var x = 5;
function add() {
    console.log(x);
    x++;
}
add();
add();
add();

//pure functions:
// Pure functions are functions that accept an input and returns a value without modifying
// any data outside its scope(side effects).
// Predictable and without any side effects.

var y = 5;
function addPure(y) {
 console.log(y+1);
}
addPure(5);
addPure(6);
addPure(7);