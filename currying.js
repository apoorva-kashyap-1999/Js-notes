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