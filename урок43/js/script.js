var message = "глобально";
console.log("глобально: сообщение = " + message);

var a = function () {
  var message = "внутри a";
  console.log("a: сообщение = " + message);


  function b () {
    console.log("b: message = " + message); 
  }


  b();
}


a();