const array = [1,2,3,4,5,6,4,5,6,78,9]

 //using slice
        //(startindex, endindex)
let newArray = array.slice(0,7) //last index excluded
console.log(newArray) //only gives a new array does not change the original
console.log(array)



//using splice
let array1 = [1,2,3,4,5]
console.log(array1)
let a = array1.splice(1,2) //(index, no.of elements to remove)
console.log(a) // modify the orignal array
console.log(array1)

//replacing and adding element
console.log(array1)
let b = array1.splice(1,1,3) //(index, no.of element to remove, element to add)
console.log(b)
console.log(array1)

console.log(array1)
let c = array1.splice(1,0,36)
console.log(c)
console.log(array1)

//Note: in splice if we dont give the no if elements to remove, it will remove all
//the elements after index