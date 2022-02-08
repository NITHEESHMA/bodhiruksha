let reverse = (n) => {
    var digit, result = 0
  
    while( n ){
        digit = n % 10; 
        result = (result * 10) + digit; 
        n = parseInt(n/10);  
    }  
  
    return result;
  }
  console.log(reverse(123));
  