// reduce method is used for narrowing/reducing down to some value

//(1) 
//normal way
const arr = [1,2,4,5,3,5] 
let sum  = 0
function soSum (arr) {
    for(var i = 0; i<arr.length; i++) {
     sum = sum + arr[i]
    }
    return sum
}
console.log(soSum(arr))

//using reduce
const ans = arr.reduce(function (acc, curr)  {
    acc = acc + curr
    return acc
}, 0)
console.log(ans)




//(2)
//normal way
let max = arr[0]
function findMax (arr) {
    for(var i=0; i< arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(findMax(arr))

//using reduce
const out = arr.reduce(function(max, items) {
    if(items > max) {
        max = items
    }
    return max
}, 0)
console.log(out)


