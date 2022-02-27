/*function Circle (radius) {
	this.radius = radius;

	this.getArea = function(){
		return Math.PI * Math.pow(this.radius, 2);
	};

	console.log(this);
}

var myCircle = new Circle(10);
console.log(myCircle.getArea());


*/

//Object literal

var Circle = {
	radius: 10,

	getArea: function() {
		console.log(this);
		return Math.PI * Math.pow(this.radius, 2);

	}
};

console.log(Circle.getArea());