// JavaScript Document
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleNav() {
  var x = document.getElementById("nav");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}