let showInfo = function () {
    console.log(this.firstname + " " + this.lastname);
}

let name = {
    firstname: "Amit",
    lastname: "Kumar",   
}

let name1 = {
    firstname: "Sumit",
    lastname: "Kumar",
}

//function borrowing using call method
showInfo.call(name);
showInfo.call(name1);


//-------------------------------------------------------------------

let info = function (city, state) {
    console.log(this.firstname + " " + this.lastname + " " + "from" +" "+ city + " , " + state);
}

let name2 = {
    firstname: "Amit",
    lastname: "Kumar",   
}

let name3 = {
    firstname: "Sumit",
    lastname: "Kumar",
}

//function borrowing using call method
info.call(name2, "Mumbai", "Maharashtra");
info.call(name3, "Rajkot", "Gujarat");

//apply method
info.call(name2, ["Mumbai", "Maharashtra"]);
info.call(name3, ["Rajkot", "Gujarat"]);

//bind method
//this returns a method which can be invoked later when we want
let printName = info.bind(name2, "Mumbai", "Maharshtra");
console.log(printName);
printName();


//differnce b/w call and bind method
//call directly invokes a method and bind returns a method to be invoked later.