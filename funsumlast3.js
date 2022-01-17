function lastThreeSum(n) {
  //can be any three digit number
  return parseInt(n / 100 + ((n / 10) % 10) + (n % 10));
}
console.log(lastThreeSum(123));
