
// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”
// An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, 
// promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.


function f1 (location) {
    return new Promise((resolve, reject)=>{
 console.log(`Making request to ${location}`);

  if(location == 'Google') {
      resolve('This is google');
  }else {
      reject('Google is the only option');
  }
    });
}

function f2(response) {
    return new Promise((resolve,reject)=>{
      console.log("Request under process!!");
      resolve(`For your information + ${response}`);
    });
}

 f1('Google').then((response)=> { //f1('faceboook').then((response) ==> error
    console.log('There is response.')
    return f2(response);
 }).then(process => {
     console.log(process);
 }).catch(error => {
     console.log(error);
 });




 //----------------------------------------------------------------------------------
 //doing the same thing with async await

 async function doTask() {
   try{
    const response = await f1('Google');
    console.log("This is the repsonse");
    const process = await f2(response);
    console.log(process); 
   }
   catch (error){
  console.log(error);
   }

 }
 doTask();