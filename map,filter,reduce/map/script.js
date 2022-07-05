//Map function are  used for array transformation


const arr = [1,2,3,4,5] 


//double transformation
function double (x) {
    return x * 2
}


//we can also write
// const out = arr.map(function double (x) {
//     return x * 2
// })

const out = arr.map(double)
console.log(out)

//tripple transformation
function tripple (y) {
    return y * 3
}
const out1 = arr.map(tripple)
console.log(out1)

//transfrom to binary
function binary (z) {
    return z.toString(2)
}

const out2 = arr.map(binary)
console.log(out2)

//this way its also possible
// const out2 = arr.map((x)=> x.toString(2))


