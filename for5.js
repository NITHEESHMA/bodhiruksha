//check the num is prime or not

var num = 7;
for (var i = 2; i <= parseInt(num / 2); i++) {
  if (num % i == 0) break;
}
if (i != parseInt(num / 2)) console.log(num + "num is prime");
else console.log(num + "num is not prime");
