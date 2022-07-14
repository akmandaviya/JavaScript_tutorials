let a = [1,2,3,4,5,6,7]
let sum = 9

let low = 0, high = a.length-1

while(low < high) {
    if(a[low] + a[high] > sum) {
        high--
    }
    else if (a[low] + a[high] < sum) {
        low++
    }
    else if (a[low] + a[high] == sum) {
        console.log(a[low], a[high])
        high--
    }
}