function primeRange(from, end) {
  for (var counter = from; counter <= end; counter++) {
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      console.log(counter);
    }
  }
}
primeRange(1, 100);
