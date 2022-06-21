//Rest
function add (a,b) {
    console.log(a+b);
}
add(1,2,3,4,5);//-->o/p -> 1+2 =3, ignoring 3,4,5


 //list of items to array
function add1(a,b,...restVar){
    console.log(a+b);
    console.log(restVar);
}
add1(1,2,3,4,5);





//Spread

console.log(Math.min(1,2,3,4,5)); //--> o/p-> 1

let usingSpread = [1,2,3,4,5];
console.log(Math.min(usingSpread)); //-->o/p->Nan
 //here array to list items
console.log(Math.min(...usingSpread));


