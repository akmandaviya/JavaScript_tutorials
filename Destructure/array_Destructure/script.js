//Array Destructure

const alphabets = ['A','B','C','D','E']
const numbers = [1,2,3,4,5,6]

// const a = alphabets[0]
// const b = alphabets[1]
  
    ///destructuring
// const [a,b] = alphabets //--> A B
// console.log(a) //--> A
// console.log(b) //--> B

// const [a,,c] = alphabets //-->skipping b ==> A,C
// console.log(c) --> C
// console.log(a) //--> A

const [a,b,...restElements] = alphabets
console.log(a)
console.log(b)
console.log(restElements)

  
const newArray = [...alphabets, ...numbers] 
console.log(newArray)

           //same as above using concat property
const nArray = alphabets.concat(numbers)
console.log(nArray)


function sumAndMul(a,b) {
    return [a+b, a*b] 
    // return [a+b, a*b, a/b] 
}

// let array = sumAndMul(2,3)
// console.log(array)
      //destructure

      const [sum, multiply, division = " no division"] = sumAndMul(2,3)
      console.log(sum)
      console.log(multiply)
      console.log(division)