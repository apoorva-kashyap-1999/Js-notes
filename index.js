//DEBOUNCING
let count = 0;
const getData = () => {
  //make an api call
  console.log("Data fetched..." + count++);
};

const debouncedFunction = ( fn, delay) => {
    let timer;
   return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
};


const debouncingFunction = debouncedFunction(getData, 1000);


//CURRYING
const multiply = function(x,y){
  console.log(x*y);
}

//using bind
const multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(5);
const multiplyByThree = multiply.bind(this,5,3);

//using function closures
let functionCurryingByClosure = function(x){
  return function(y){
    console.log(x*y);
  }
}