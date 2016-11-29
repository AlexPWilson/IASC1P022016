function aName(){

  var aName = new Array();
  aName = ["taco", "salsa", "burrito", "cheese", "pizza"];


var aName2 = new Array();
aName2 = ["spicy", "cheesy", "wonderful", "yummy", "pretty"];


var x = Math.floor(Math.random()*5)
var y = Math.floor(Math.random()*5)

document.getElementById("output").innerHTML = aName[x] +" "+ aName2[y] + "</br>";
}
