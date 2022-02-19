/*
// ***** String concatination
var apple = "Hello";

apple += " World";

apple = apple + " World";


console.log(apple + "!");



// ***** Regular math operators: +, -, *, /
console.log((5 + 4) / 3);
console.log(undefined / 5);
function test1 (a) {
  console.log( a / 5);
}
test1();




// ***** Equality 
var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}

/*
x = "5";
if (x == y) {
  console.log("x='4' is equal to y=4");
}
else
  console.log("5>4")


var x = 4, y = 4;
x = "4";
// ***** Strict equality

if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
}
else {
  console
  .log("Strict: x='4' is NOT equal to y=4");
}
*/


// ***** If statement (all false)
/*
var x = 0;

if (x == false || null || 
     undefined || "" || 0 || NaN) {
  console.log("НЕ ОПРЕДЕЛЕННЫЕ");
}
else {
  console.log ("All false");
}


var x="WEB";


// ***** If statement (all true)
if (x==true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}
else 
  console.log("10")





// ***** Best practice for {} style
// Curly brace on the same or next line...
// Is it just a style?
function a() 
{
  return
  { 
    name: "Assem"
  };
}

function b() {
  return { 
      name: "Assem"
  };
}

console.log(a());
console.log(b());
*/

// For loop
var sum = 0;

for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);

