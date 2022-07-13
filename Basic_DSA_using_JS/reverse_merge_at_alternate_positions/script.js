let a = [1,2,3,4,5,6,7,8]

let arr = a.filter(function isOdd(x) {
   return x % 2 !== 0
})
console.log(arr)

let arr1 = a.filter(function isEven(y) {
   return y % 2 === 0
})
console.log(arr1)

let arr2 = arr1.reverse()
console.log(arr2)

const mergeArray=  (arr,arr2) => {
   let res = []
   const size = arr.length + arr2.length

   for(let i=0; i< size ; i++) {
      if (i < arr.length) {
        res += arr[i]
      }
      if(i < arr2.length) {
        res += arr2[i]
      }
   }
   return res
}

let ans = (mergeArray(arr,arr2))
console.log("Result is :")
console.log(...ans)