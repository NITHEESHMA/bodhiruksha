let evenrRange = (from, end) => {
    for (var i = from; i <= end; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  }
  evenrRange(10, 100);
  