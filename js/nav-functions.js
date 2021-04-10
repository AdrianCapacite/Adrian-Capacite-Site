// JavaScript Document
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleNav() {
  var nav = document.getElementById("nav-items");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

/* Shrinks nav bar when user scrolls down */
window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
		var nav = document.getElementById("nav-container");
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		nav.style.minHeight = "48px";
		nav.style.padding = "0px 0";
		} else {
		nav.style.minHeight = "56px";
		nav.style.padding = "4px 0";
	}
}