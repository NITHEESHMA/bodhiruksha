console.log(1 && 6);

var a1 = true && true;

var a2 = true && false;

var a3 = false && true;

var a4 = false && 3 == 4;

var a5 = "cat" && "dog";

var a6 = false && "cat";

var a7 = "cat" && false;

console.log(a1, a2, a3, a4, a5, a6, a7);

console.log(1 && 0);
console.log(1 && 5); //if the first operand
//is truthy then returned the second
//operand

console.log(null && 5);
console.log(0 && "no mater");
//first operand false
//,then "and" ignore second operand

console.log(1 && 2 && null && 3);

console.log(1&&2&&3);
