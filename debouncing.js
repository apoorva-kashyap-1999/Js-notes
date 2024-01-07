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
