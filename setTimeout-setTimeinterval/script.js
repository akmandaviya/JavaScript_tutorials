// Set timeout:-
// --->(1)
const a = "First"
console.log(a)

const b = "Second"
setTimeout(()=> {
  console.log(b)
},2000)


// --->(2)
function a () {
    var a1 = 10
    console.log(a1)
}

const c = setTimeout(a,2000)
function stopTimer() {
    clearTimeout(b) //==> timer clear
}


// Set timeinterval
const d = "using setTimer Interval"
console.log(d)
setInterval(() => {
    const e = "I'm happy!!"
    console.log(e)  
}, 1000);

function g () {
    var g1 = 10
    console.log(g1)
}

const f = setInterval(g,1000)
