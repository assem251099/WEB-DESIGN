//Same as document.addEventListener("DOMContentLoaded", f)
$(function (){
	//Same as document.querySelector("#navbarToggle").addEventListener("DOMContentLoaded", function)
	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});

	$("navbarToggle").click(function (event) {
		$(event.target).focus();
	});
});