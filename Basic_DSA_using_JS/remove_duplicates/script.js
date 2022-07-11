let arr = [1,2,2,3,3,4,4,5,5,5,6,6,7,7,7,8,8,9,10]

//(1)
//using new set method
//set cannot store duplicate values
let newArray = [...new Set(arr)]
console.log(newArray)

//(2)
for(let i= 0; i<arr.length;i++) {
    for(let j= i+1; j<arr.length; j++) {
        if( i !== j) {
            if(arr[i] === arr[j]) {
                arr.splice(j,1)
            }
        }
    }
}
console.log(arr)


//(3)
const a = arr.reduce()

