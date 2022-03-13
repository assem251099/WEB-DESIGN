//DOM
/*
console.log(document.getElementById("title"));

console.log(document instanceof HTMLDocument);*/

function sayHello () {
	var names = document.getElementById("name").value;
	var message = "<h2>Hello " + names + " !</h2>";

/*
	document.getElementById("content")
	.textContent = message;
*/
	 document.getElementById("content")
	.innerHTML = message;



	if (names === "students") {
		var title = document.querySelector("#title")
					.textContent;

		title += " & WEB Development";

		document.querySelector("#title")
						.textContent = title;
	}
	else {
		var title = document.querySelector("#title")
					.textContent;

		title = "Lecture 51";

		document.querySelector("#title")
						.textContent = title;
	}


}
