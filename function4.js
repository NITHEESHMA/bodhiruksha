function funA(a, b) {
  return a + b;
}
function funA(c) {
  return c;
}
console.log(funA(2));
console.log(funA(3, 4));

//js does not support method overloading.if we parese more than one function with same
//name.it consider the last defined function and overwrite the previuos one
