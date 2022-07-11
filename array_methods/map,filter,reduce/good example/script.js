const users = [
     {firstName: "abdulkarim", lastName: "mandaviya", age:29},
     {firstName: "rahul", lastName: "dravid", age:45},
     {firstName: "jonny", lastName: "depp", age:29},
     {firstName: "rohan", lastName: "dutt", age:50}
]

const out = users.map((x) => x.firstName +" "+ x.lastName)
console.log(out)



const out1 = users.reduce(function(acc, curr){
    if(acc[curr.age]) {
        acc[curr.age] += acc[curr.age]
    }
    else{
        acc[curr.age] = 1
    }
    return acc
},{})

console.log(out1)


//Functional chaining

//finding firstname with age less than 30
//filter is used to filter out age less than 30
//map is applied on filter output to get firstname
const out2 = users.filter((x) => x.age < 30).map((y) => y.firstName)
console.log(out2)

//this same thing achieved by reduce
 
const output = users.reduce((previous, current) => {
  if (current.age < 30) {
   previous.push(current.firstName);
  }
  return previous;
}, []);

console.log(output)
