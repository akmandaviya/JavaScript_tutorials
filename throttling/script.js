

function myThrottle(f,d) {
    return function () {
        document.getElementById("btn").disabled = true
      setTimeout(() => {
        f()
      }, d);
    }
}

const goodFunction = myThrottle(() => {
    document.getElementById("btn").disabled =false

console.log("function called")
}, 2000)