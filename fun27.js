function lastDigit(a, b, c) {
  const result1 = a % 10;
  const result2 = b % 10;
  const result3 = c % 10;

  // compare the last digits
  if (result1 == result2 && result1 == result3) {
    return true;
  } else {
    return false;
  }
}
console.log(lastDigit(12, 32, 42));
console.log(lastDigit(18, 30, 42));
console.log(lastDigit(19, 39, 49));
