function reverse(n){
  var digit, result = 0

  while( n ){
      digit = n % 10;  //  Get right-most digit----123/10 → 12.3 → 3
      result = (result * 10) + digit; //---123 → 1230 + 4 → 1234
      n = parseInt(n/10);  //  Remove right-most digit----123 → 12.3 → 12
  }  

  return result;
}
console.log(reverse(123));
