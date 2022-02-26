// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y) {
  return x * y;
}

console.log(multiply(5, 3));
multiply.version = "v.1.0.0";

console.log(multiply.toString());
console.log(multiply.version);

//Function factory

function makeMultiplier(multiply){
  var myFunc = function(x){
    return multiply * x;
  };
  
  return myFunc;
}


var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAdd = makeMultiplier(2);
console.log(doubleAdd(100));


function doOperationOn(x, operation) {
  return operation(x);

}

var result = doOperationOn(5, multiplyBy3);
console.log(result);


