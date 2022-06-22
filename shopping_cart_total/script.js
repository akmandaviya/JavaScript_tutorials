const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
]

function output1 (products){
    let a = products, object = {}
    for (let i=0; i<a.length; i++) {
        if(!object[products[i].productName]) {
            object[products[i].productName] = 1
        }
        else {
            object[products[i].productName] +=1
        }
    }
    return object
}
console.log(output1(listOfProducts))


const result = listOfProducts.reduce((total, items) => {
     if(items.productName in total) {
        total[items.productName].quantity = items.quantity + total[items.productName].quantity
     }
     else {
        total[items.productName] = items
     }
     return total
}, {})

console.log(result)