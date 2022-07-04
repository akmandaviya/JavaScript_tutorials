
// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”
// An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, 
// promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.


// without using async and await
console.log("hello world")
function a () {
    console.log("inside the function")
    return "I'm happy !!!"
}
console.log("before calling")
let b = a()
console.log("after calling")
console.log(b)
console.log("last line")


//using asyc and await
console.log("Hello world")
async function f1 () {
    console.log("inside the function")
    const response = await fetch('https://api.github.com/users')
    console.log("before response")
    const users = await response.json()
    console.log('users resolved')
    return users
}
console.log('before calling')
let c = f1()
console.log('after calling')
console.log(c)
c.then(data => console.log(data))
console.log("last line")

