(function (window) {
  var assemGreeter = {};
  assemGreeter.name = "Assem";
  var greeting = "Hello ";
  assemGreeter.sayHello = function () {
    console.log(greeting + assemGreeter.name);
  }

  window.assemGreeter = assemGreeter;

})(window);


