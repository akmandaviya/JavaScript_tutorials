const str1 = 'abc';
const str2 = 'def';

const merge = (str1, str2) =>
{
    let res = ""
    for(let i=0; i<str1.length+str2.length;i++) {
        if(i< str1.length) {
            res.concat(str1.charAt(i))
        }
        if(i<str2.length) {
             res.concat(str2.charAt(i))
        }
    }
    return res
}
console.log(merge(str1,str2))