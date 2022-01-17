function divisible(i) {
    if (i % 3 === 0 || i % 7 === 0) {
      return true;
    }
    else{
        return false;
    }
  
}

console.log(divisible(21));
console.log(divisible(20));
console.log(divisible(29));
