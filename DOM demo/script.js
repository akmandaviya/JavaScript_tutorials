//When a page loads, broweser crreates a Document object model(DOM) tree of the page

console.log("Welcome to DOM!");

const text = document.querySelector(".title");
const btn  = document.querySelector(".btn");

const all = document;
console.log(document);


// //now manipulating

text.style.color='red';
text.style.backgroundColor='yellow';

btn.style.color= 'yellow';
btn.style.backgroundColor='black';

const nameList = document.querySelectorAll(".name li");
console.log(nameList);

