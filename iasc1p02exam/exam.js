document.getElementById("output").innerHTML=Date();
var theDate = new Date();
var year = theDate.getFullYear();
var month = theDate.getMonth();
var day = theDate.getDate();
var hour = theDate.getHours();
var minute = theDate.getMinutes();

console.log(hour+"/"+day+"/"+month+"/"+year);
