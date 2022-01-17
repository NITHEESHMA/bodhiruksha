function sumOfFourDigit(num){
    let m,sum = 0;
    for(let i=0;i<5;i++){
      m = num % 10;
      sum = sum + m;
      num = num / 10;
    }
    return sum;
  }

console.log(sumOfFourDigit(3456));