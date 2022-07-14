let arr = [1,2,3,4,5]

//(1)
let reverseUsingMethod = arr.reverse()
console.log(reverseUsingMethod)


//(2)
let temp;
let start = 0, end = arr.length-1

while(start < end) {
    temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

    start++
    end--
}
console.log("reversed array is: " + arr)