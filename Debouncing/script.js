let count = 0
const getData = () => {
    //calls the API to fetch data
    console.log("hello event fired.....>", count++)
}
                   //arguments(function, delay)
const debounceMethod = function (func, d) {
    let timer;
   return function () {
    ///to keep a check on lexical scope, that this function is only called
    let context = this, args = arguments;
    //to clear the timer when 300ms not passed
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    },d)
   }
}

const goodSearch = debounceMethod(getData, 300)
//it means that fire the event and fetch data only when time difference between
// 2 key presses in > 300ms
//menas when we take pauses