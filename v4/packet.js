// "ethernet, ip, tcp, http, html"
// TODO: create Object for each layer that includes highlight()/unhighlight() functions
var ethernet = document.getElementsByClassName("ethernet");

for (var i = 0; i < ethernet.length; i++) {
  ethernet[i].addEventListener("mouseover", highlight);
  ethernet[i].addEventListener("mouseout", unhighlight);
}

function highlight() {
  for (var i = 0; i < ethernet.length; i++) {
    ethernet[i].classList.add("blue");
  }
}
function unhighlight() {
  for (var i = 0; i < ethernet.length; i++) {
    ethernet[i].classList.remove("blue");
  }
}
