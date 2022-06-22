
//simple forEach loop
const shoppingList = [
    {product: "Apple", price : 200},
    {product: "Grapes", price : 150},
    {product: "Chicken", price : 130},
    {product: "Eggs", price : 110},
    {product: "Lemon", price : 80}
]

let totalofAll = 0

shoppingList.forEach(element => {
    totalofAll += element.price
})

console.log(totalofAll)


//reduce func has 2 parameters a intial(start) value and a function(fat arrow)
//func has 2 parameters a accumulator(total) and the items(element)
//accumulator is for the value we are accumulating(reducing) to, in here we are trying to 
//reduce the array down to price

const totalPrice = shoppingList.reduce((total, element)=> {
    //to see whats happenging internally
    // console.log(`Total: ${total}`)
    // console.log(`Element ${element.price}`)
   return total + element.price //this will be the total for next iteration
},0)

console.log("Total: " + totalPrice)


const People = [
    {name: "Ajay",age: 25 },
    {name: "Ashok",age: 35 },
    {name: "Roger",age: 38 },
    {name: "Kyle",age: 15 },
    {name: "Jamie",age: 21 },
    {name: "Aman",age: 25 },
]

const result = People.reduce((groupedPeople, person) => {
  const age = person.age
  
  if(groupedPeople[age] == null) groupedPeople[age] = []
  groupedPeople[age].push(person)
  return groupedPeople
}, {})

console.log(result)


const numbers = [10,12,11]

const sum = numbers.reduce((total, number, index, array)=> {
    // console.log(index)
    // console.log(array)
      return total + number
},0)
console.log(sum)


//when we dont apply a default(initial) value, reduce will consider first index value as default





