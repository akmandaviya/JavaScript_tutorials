
//forOf used on array
const items = ["Apple", "Mango", "Egg", "Rice", "Milk" , "Oil"]

for(let n of items ) {
    console.log(n)
}


//forIn used on object
const list = {
    apple : 1,
    mango : 5,
    egg : 10,
    pen : 3,
    book : 2, 
}

for(const i in list ) {
    // console.log(i) // key as output
    // console.log(list[i])
    console.log(`Key: ${i} and value :${list[i]}`)
}