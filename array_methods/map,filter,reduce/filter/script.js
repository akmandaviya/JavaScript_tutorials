//filter method is used to filter some paricular value from array based on some logic
// Ex: filter even/odd number
//     multiple of some number
//     divisible by some number etc.. 
     
const arr = [5,2,8,4,10,11,15]

//odd value
function isOdd(x) {
    return (x % 2 !== 0)
    // return x % 2 // same
}
const out = arr.filter(isOdd)
console.log(out)

//even value
function isEven(y) {
    return y % 2 === 0
}
const out1 = arr.filter(isEven)
console.log(out1)

//value greater than 4
const out2 =arr.filter((z) => {return z > 4})
console.log(out2)

//multiple of 3
const out3 = arr.filter((a) => a % 3  == 0)
console.log(out3)

//divisble by 4
const out4 = arr.filter((b)=> b % 4 == 0)
console.log(out4)
