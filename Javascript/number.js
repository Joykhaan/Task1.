var aloo= 50;
var peyaj= 40;
var mula= parseInt("20"); //convert  string to a number use parseInt
var korola= parseFloat("25.5"); // convert decimal string to a number use parseFloat

var first =0.1;
var second= 0.2;
var total = (first+second).toFixed(3); // here using toFixed we can limit decimal number but it convert the number into string value but we can fixe this using parseFloat

console.log(aloo);
console.log(peyaj);
console.log(mula);
console.log(korola);
console.log(parseFloat(total)); // here use parseFloat