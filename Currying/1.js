//This is function currying using bind method, here we make a copy of function multiply and 
// we create more methods out of it by resetting the arguments 
// Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument.
// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c) .

// //Using Bind method
let multiply = function(a,b) {
    console.log(a*b);
}

//when we call bind method it gives a copy of multiply method and it doesn't invoke directly
// here x is fixed by 2
let mul1 = multiply.bind(this, 2);
mul1(5);// this argunment 5 will refer to as y.
mul1(10);

let mul2 = multiply.bind(this,3);
mul2(5);
mul2(10);

let mul3 = multiply.bind(this,2,3);
mul3(5);// here x=2,y=3 it sill ginore argument 5 and will do 2*3

let mul4 = multiply.bind(this);
mul4(2,4); //--> 2*4 =8





//By using Closure functions
let check = function (x) {
       return function(y) {
        console.log(x * y);
    }
}

let multi = check(2);
multi(3); // --> 2*3 =6
