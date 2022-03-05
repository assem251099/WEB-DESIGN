// Arrays
var array = new Array();
array[0] = "WEB Design";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);

// Short hand array creation
var names = ["Raiyla", "Nurilla", "Adel", "Bariyat", "Zevara"];
console.log(names.length);

/*
for (var i = 0; i < names.length; i++) {

  console.log("Hello " + names[i]);
  Hello + names[0]
  names[3]
}

names[100] = "Assem";
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}*/

var names2 = ["Raiyla", "Nurilla", "Adel", "Bariyat", "Zevara"];

var myObj = {
  name: "WEB Design",
  course: "HTML/CSS/JS",
  platform: "with Assem"
};/*
for (var prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
}

for (var name in names2) {
  console.log("Hello " + names2[name]);
}*/

names2.greeting = "Hi!";

for (var name in names2) {
  console.log("Hello " + names2[name]);
}


























