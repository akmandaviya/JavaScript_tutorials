//Explaining closures with examples


//(1)
function outer() {
    var a = 7;
    function inner() {
        console.log(a);
    }
    inner();
}
outer();

//---------------------------------------------------------

//(2)
function x () {
    var a = 3;
    function y () {
        console.log(a);
    }
    return y; // returning y
}
var b = x();
console.log(b);
b(); // here y function remebers its lexcial scope, so return 3. here whole closure returns

//-----------------------------------------------------------------------------------------

//(3) same thing as above
 
function c () {
    var a = 5;
    return function d() {
        console.log(a);
    }  
 }
 var e = c();
 console.log(e);
 e();

 //----------------------------------------------------------------------------------------

 //(4)

 function f () {
     var a = 6;
     function g () {
         console.log(a);
     }
      return g;
 }
 var w = f();
 console.log(w);
 w();

 //------------------------------------------------------------------------------------------

 //(5) here we are accessing parent of a3 which is a2 and parent of a2 which ic a1.
 function a1 () {
     function a2 () {
         var a = 100;
         function a3() {
             console.log(a);
         }
         a3();
     }
     a2();
 }
 a1();

