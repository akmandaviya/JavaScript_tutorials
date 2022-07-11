var divs = document.getElementsByTagName("div")

for(var i=0 ; i< divs.length; i++) {
    // divs[i].addEventListener("click", clickHandler, false) ==> bubbling
    divs[i].addEventListener("click", clickHandler, true) //=> capturing
}

function clickHandler(event) {
    // event.stopPropagation
    alert(this.getAttribute("id") + "click event handled")
}