//Object
/*
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "red";

console.log(company);
console.log("Имя диретора нашей компании: " 
  + company.ceo.firstName);
console.log(company["name"]);

var s = "stock name";
company[s] = 110; 
console.log(company);
console.log("Цена нашего стока " + company[s])


*/

//Better way: Object literal

var company = {
  name: "Facebook",
  ceo: {
    firstName: "Mark",
    favColor: "red"
  },
  stock: 110
};

console.log(company.ceo.firstName);





