function sumLastTwo(n){
    
    let secondDigit,lastDigit;
        switch(n){
       case 1:  lastDigit = n % 10;
        n = n / 10;
        break;
        case 2: secondDigit=n%100;
        n=n/10;
        }
         
        sum = lastDigit + secondDigit;
        return sum;
    }

console.log(sumLastTwo(123));