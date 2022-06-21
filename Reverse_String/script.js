//(1) By Built-in-functions
function reverseAString (str)  {
 var splitString = str.split("");
 var reverseArray = splitString.reverse();
 var joinArray = reverseArray.join("");
 return joinArray;
}
console.log(reverseAString("AbdulKarim"));



//(2) Iteration
function reverseIterative(str) {
    var newString = "";
    for(var i=str.length-1; i>=0;i--) {
       newString += str[i];
    }
    return newString;
}
console.log(reverseIterative("Hello"));



//(3) Recursion
function reverseRecursive(str) {
    if(str == "") {
        return "";
    }
    else {
        return reverseRecursive(str.substr(1)) + str.charAt(0);
    }
    return reverseRecursive;
}
console.log(reverseRecursive("Good morning"));

