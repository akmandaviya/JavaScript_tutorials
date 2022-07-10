const person1 = {
    name: "abdukarim",
    age: 29,
    address : {
        city: "gondal",
        state : "gujarat"
    }
}


const person2 = {
    name: "ajay",
    // favoriteFood : "rajma",
    age: 35,
    address : {
        city: "kanpur",
        state : "U.P"
    }
}


   //destucturing
// const {name, age } = person2
// console.log(name)
// console.log(age)

// const {name: firstname, age} = person2
// console.log(firstname)
// console.log(age)

//--.using default value/paramater
//   const {name, age, favoriteFood = "Biryani"} = person2
//   console.log(name + age + favoriteFood)

     //using rest 
// const {name,...restObj} =person1
// console.log(name)
// console.log(restObj)


   //nested objects
// const {name, address : {city}} = person2
// console.log(name)
// console.log(city)


const person3 = {
    name: "ajay",
    age: 35,
    address : {
        city: "kanpur",
        state : "U.P"
    }
}

const person4 = {
    name: "sunil",
    favoriteFood : "rajma",
}

const newPerson = {...person3, ...person4}
console.log(newPerson)



   //using temporal literals

// function printPerson(user) {
//     console.log(user)
// }
// printPerson(person1)

function printPerson({name, age, favoriteFood = "french fries"}) {
    console.log(`the name is ${user.name}, place is ${user.address.city} and food is ${favoriteFood}`)
}