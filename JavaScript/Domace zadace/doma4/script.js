// Variables
var numbers = document.querySelectorAll(".btn-number");
var operation = document.querySelectorAll(".btn-operation");
var clear = document.querySelector(".btn-clear");
var equal = document.querySelector(".btn-equal");
var display = document.querySelector(".display");
var count = "";

//On click show
function showNumbers() {
    display.innerHTML = 1;
}
numbers.addEventListener("click", showNumbers);