var myVar = function isEven(num) {
  return num % 2 == 0;
};
console.log(myVar(10));
console.log(myVar(11));
console.log(myVar);
console.log(typeof myVar);

console.log(myVar());
console.log(myVar(""));
console.log(myVar("yo yo"));
console.log("yo yo" % 2);
console.log(NaN == 0);
console.log("" % 2);
