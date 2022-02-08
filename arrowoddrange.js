let oddrRange = (from, end) => {
    for (var i = from; i <= end; i++) {
      if (i % 2 == 1) {
        console.log(i);
      }
    }
  }
  oddrRange(10, 100);
  