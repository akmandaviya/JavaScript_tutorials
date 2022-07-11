//Both are high order function, 
//available in array prototype and both can be used on array use when we want to loop over array.
        
var arr =[1,2,3,4];

//by for Each
var doubleForeach = [];
arr.forEach(function(value, index, array) {
   doubleForeach.push(value * 2);
})
console.log(doubleForeach);// simple iterating over each element


//by map
var doubleByMap = arr.map(function(value, index, array) {
  return value *2;
})
console.log(doubleByMap);