
function countDigit(num) {
    let count = 0;
    while (num != 0) {
      num = parseInt(num / 10);
      count++;
    }
    return count;
  }

function twice(num) {
  let count = countDigit(num);
  switch (count) {
    case 1:
      return num * 10 + num;
    case 2:
      return num * 100 + num;
    case 3:
      return num * 1000 + num;
      case 4:
          return num*10000+num;
  }
}
console.log(twice(120));
console.log(twice(4335));