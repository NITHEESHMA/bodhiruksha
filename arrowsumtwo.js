let sumTwoDigit = (num) =>{
    let m,
      sum = 0;
    while (num > 0) {
      m = num % 10;
      sum = sum + m;
      num = num / 10;
    }
    return sum;
  }
  
  console.log(sumTwoDigit(14));
  console.log(sumTwoDigit(25));