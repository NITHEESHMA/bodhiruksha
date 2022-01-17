function fact(num) {
  console.log(`The factors of ${num} is:`);

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
}

fact(6);
fact(9);
fact(24);
