function addTwoEqualThrird(a, b, c) {
  if ((a + b == c) ||(a+c==b)||(b+c==a)){
    return true;
  } else {
    return false;
  }
}
console.log(addTwoEqualThrird(3, 1, 4));
console.log(addTwoEqualThrird(3, 1, 8));
console.log(addTwoEqualThrird(9, 1, 8));
