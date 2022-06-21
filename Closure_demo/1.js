//MIMP Interview questions of Closure:

//(1)
//Here we have given set timeout of 3000ms, so the js execution doesn't wait for 3000ms.
//set timeout function along with its lexical scope is on hold in a callback queue, and "Hello World" is logged first.
// when timer is out, value of i is logged.

function x() {
var i = 10;
   setTimeout ( function () {
     console.log(i);
   },3000);
   console.log("Hello World");
}
x();

//------------------------------------------------------------------------------------

//(2)
//Print numbers from 1 to 5 after every second.
//means == > 1 --> 1s, 2 --> 2s, 3--->3s and so on.

// Wrong way of doing ( dont use this method) == > it will give ouptut 6 6 6 6 6
// function x() {
//     for(var i=1;i<=5;i++) {
//         setTimeout(function () {
//            console.log(i); 
//         },i * 1000);
//         console.log("Hello World");
//     }
// }
// x();

 //Using let instead of var, as let is block scope element. Every time setTimeout called function forms closure
 //new variable each time

function x() {
        for(let i=1;i<=5;i++) {
            setTimeout(function () {
               console.log(i); 
            },i * 1000);
        }

          console.log("Hello World");
    }
    x();


    //now this time by using var only
         // Earlier it was not happening with var because the copy of 'i' refers to the same memory location.
         //Somehow we have to give new copy of 'i'
         //answer is closure

 function ak () {
   for (var i=1;i<=5;i++) { // wrapping set timeout in close function and providing new value to 'i'

    function close(i) {
        setTimeout(function () {
                           console.log(i); 
                        },i * 1000);
                    }
                    close (i);
    }
    console.log("Hello World");
}
ak();
   

 
         

    


