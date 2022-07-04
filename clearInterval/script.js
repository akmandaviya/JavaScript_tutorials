let para = document.querySelector(".main")
let count=0, clear

document.querySelector(".start").addEventListener("click", ()=>{
        clear = setInterval(makeCount, 1000)
})

document.querySelector(".stop").addEventListener("click", ()=>{
    clearInterval(clear)
})

function makeCount() {
 count++
 para.innerHTML = count
}