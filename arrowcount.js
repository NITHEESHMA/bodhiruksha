let countDigit = (num) => {
    let count = 0;
    while (num != 0) {
      num = parseInt(num / 10);
      count++;
    }
    return count;
  }
  console.log(countDigit(1234));
  console.log(countDigit(10000));
  
  console.log(countDigit(1234000));