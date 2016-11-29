var numArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
"ten", "eleven","twelve", "thriteen", "fourteen", "fivteen", "sixteen", "seventeen", "eighteen", "ninteen",
"twenty", "twentyone","twentytwo","twentythree","twentyfour","twentyfive"];
var num1;
var num2;
var total;

function output(){
 num1 = document.getElementById("num1").value;
 num2 = document.getElementById("num2").value;
num1 = numArray.indexOf(num1);
num2 = numArray.indexOf(num2);
}

function add(){
  output();
  var total = num1 + num2;
document.getElementById("output").innerHTML = numArray[total];}


function subract(){
    output();
  var total = num1 - num2;
document.getElementById("output").innerHTML = numArray[total];}

function multiply(){
    output();
    var total = num1 * num2;
  document.getElementById("output").innerHTML = numArray[total];}

function divide(){
    output();
    var total = num1 / num2;
  document.getElementById("output").innerHTML = numArray[total];}
