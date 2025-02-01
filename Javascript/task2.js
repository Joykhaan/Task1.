//problem 1
var orranges=400;
var apples= 300;
var totalPrice= (orranges+apples);
var iHave= 1000;

var shopkeeper_will_return= (iHave-totalPrice);

console.log(shopkeeper_will_return);

//problem 2

var mathmatics= 75.25
var biology= 65
var chemistry= 80
var physics= 35.45
var bangla= 99.50

var totalMarks= (mathmatics+biology+chemistry+physics+bangla)
var totalSubject= 5;
var averageMarks= parseFloat((totalMarks/totalSubject).toFixed(2));

console.log(averageMarks);


//problem 3

var givenNumber= 119;
var divededNumber= 5;
var reminder= 119%5;
console.log(reminder)
 

//problem 4
// isNaN(Not a Number)is basically verify the given value is number or not! If the value is string it's show the output true otherwise it shows false.But if the value is pure number on the qoutation mark isNaN convert it to a number then show the output false.
const a =isNaN('11');
const b =isNaN(2-10);
console.log(a);
console.log(b);