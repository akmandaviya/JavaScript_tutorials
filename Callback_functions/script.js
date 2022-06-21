// //(1)

function outer() {
    console.log("This is outer funciton");
}
function inner(calling) { //anyname
    console.log("This is inner function");
    calling();
}
inner(outer);



// //(2)

function a1 (x) {
  return (x+5);
}
function a2(callback) {
    return callback(4);
}
console.log(a2(a1));




//(3)

    const a = (number) => {
    return number + 5;
      };
  
    const b = (callback) => {
     const c = 10;
  
    callback(c);
    };

  
  b((number) => console.log(a(number))); 

  

//(4)

const bar = (fooNumber) => {
    return fooNumber + 5;
  };
  
  // Then, pass it into foo as an argument
  const foo = (callback) => {
    setTimeout(() => {
    const myNumber = 10;
    callback(myNumber);
    }, 2000)
  };
  
  foo((fooNumber) => console.log(bar(fooNumber)));