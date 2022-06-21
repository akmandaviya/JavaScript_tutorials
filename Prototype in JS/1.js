//(1)
function person (name,age) {

    this.name = name;
    this.age = age;
   
}

const myName = new person("AbdulKarim", 28);
console.log(myName);

//----------------------------------------------------------------------------
//(2)
let arr = ["Amit", "Ajay"]; // --> to see all the prototype arr.__proto__
//arr.__proto__ is same as Array.prototype
//arr.__proto__.__proto__ is same as Object.protoype
//arr.__proto__.__proto__.__proto__ is null
//this is prototypal chains

let object = {
    name: "Amit",
    city: "Delhi",
    Age: "28",

    getInfo: function () { //--> to see all the prototype object.__proto__
        console.log(this.name +" , "+ this.city);
    }
}

let object1 = {
    name : "Sunil"
}

//Accessing object from object1, we are attaching properties of object to object1
//we can access the properties and method of object from object1
// here object1 is inherting from object
//this is "PROTOTYPAL INHERITING"



object1.__proto__= object // --> use object1.__proto__ , object1.name and object1.city



