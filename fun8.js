function prime(num) {
  for (i = 2; i <= num; i++) {
    if (num % i == 0) break;
  }

  if (num == i) console.log(num + "::its prime");
  else console.log(num + "::its not prime");
}

prime(7);
prime(3);
prime(6);
