let a = [1,2,3,4,5,6,7,8]

//(1)
//specific for this input
// let arr = a.filter(function isOdd(x) {
//    return x % 2 !== 0
// })
// console.log(arr)

// let arr1 = a.filter(function isEven(y) {
//    return y % 2 === 0
// })
// console.log(arr1)

// let arr2 = arr1.reverse()
// console.log(arr2)

// const mergeArray=  (arr,arr2) => {
//    let res = []
//    const size = arr.length + arr2.length

//    for(let i=0; i< size ; i++) {
//       if (i < arr.length) {
//         res += arr[i]
//       }
//       if(i < arr2.length) {
//         res += arr2[i]
//       }
//    }
//    return res
// }

// let ans = (mergeArray(arr,arr2))
// console.log("Result is :")
// console.log(...ans)

//(2)
let arr = a.filter(function isOdd(x,k) {
   if(k % 2 === 0)
   return x
})
console.log(arr)

let arr1 = a.filter(function isEven(y,s) {
   if(s % 2 !== 0) 
   return y
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

// let odd = [];
// let even = [];

// function isOdd(element, index) {
//   if (index % 2 === 0) {
//     odd.push(element);
//   }
// }

// function isEven(element, index) {
//   if (index % 2 !== 0) {
//     even.push(element);
//   }
// }

// function mergeArray(arr1, arr2) {
//   let i = 0,
//     j = 0,
//     k = 0;
//   while (k < arr.length) {
//     if (i < arr1.length) {
//       arr[k] = arr1[i];
//       k++;
//     }
//     if (j < arr2.length) {
//       arr[k] = arr2[j];
//       k++;
//     }
//     i++;
//     j++;
//   }
// }

// console.log(arr);
// arr.map(isOdd);
// console.log(odd);
// arr.map(isEven);
// console.log(even);
// even.reverse();
// console.log(even);

// mergeArray(odd, even);
// console.log(arr);