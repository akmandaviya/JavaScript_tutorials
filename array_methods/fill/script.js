//Array fill method changes the elemnts in the array with the provided value
let a = [1,2,3,4,5,6]
// let b = a.fill(0) all the elements become 0
        //value, start, end (end not included)
let b = a.fill('X',1,5) 
console.log(b)



//fill  the array with numbers from 1 to 10
function fillingNum(n) {
  return Array(n).fill(0).map((_,index) => index + 1)
}
let c = fillingNum(10)
console.log(c)