document.getElementById("output").style.visibility = 'hidden';

document.getElementById("kmInput").addEventListener("input", 
	
	function (a) {
		document.getElementById("output").style.visibility = 'visible';

	let km = a.target.value;
	document.getElementById("metrOutput").innerHTML = km * 1000
	document.getElementById("smOutput").innerHTML = km * 100000;	
	document.getElementById("mmOutput").innerHTML = km * 1000000;
});

