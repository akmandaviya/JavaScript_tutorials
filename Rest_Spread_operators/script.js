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


// let a = [1,2,3,4,5]
// let b = [6,7,8,9,a]
// console.log(b)  => this will add complete array at the 4th index


let a = [1,2,3,4,5]
let b = [6,7,8,9,...a]
console.log(b) // this will add only the elements of the array from the 4th index


