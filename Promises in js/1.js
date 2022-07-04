//By using promise constructor
//(1)
var myPromise = new Promise(function (resolve, reject) { //syntax of promise constructor

    const a = "abdulkarim";
    const b = "abdulkarim";

    if (a == b) {
        resolve();
    } else {
        reject();
    }
});

//promise.then --> accepted/fulfilled
//promise.catch --> rejected
myPromise.then(function () {
    console.log("Promise fulfilled");
}).catch(function () {
    console.log("Promise rejected");
});



//(2)
//this is producing promise
const obj = new Promise((resolve,reject)=>{
 setTimeout(() =>{
   let rollNo =[1,2,3,4];
   resolve(rollNo);
   reject('Error while searching');
 },2000);

});


//this is consumng promise
obj.then((rollNo)=>{
    console.log(rollNo); // it will give complete list
console.log(rollNo[2]);// roll no  at 2nd index
}).catch((error)=> {
    console.log(error);
});

//---------------------------------------------------------------------------------------


//Promise.all

let p1 = Promise.resolve(50);
let p2 = 200;
let p3 = new Promise(function(resolve,reject) {
    setTimeout(resolve,100,'hello');
    //setTimeout(reject,100,'hello);
}); 

Promise.all([p1,p2,p3]).then(function(answer){
console.log(answer);
}).catch(error => console.log(`Error in promises ${error}`));


// Promise.race method
    
// let p1 = Promise.reject(50)
// let p2 = 250
// let p3 = new Promise(function(resolve, reject) {
//     setTimeout(resolve,2000,"Hello")
//     // setTimeout(reject,1000,"Hello")
// })

// Promise.race([p1,p2,p3]).then(function(answer){
//     console.log(answer)
// }).catch(function(error){
//     console.log(`error ${error}`)
// })