var month = 5;
var year = 2020;
var noOfDays;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 9:
  case 11:
    noOfDays = 31;
    break;

  case 4:
  case 6:
  case 8:
  case 10:
  case 12:
    noOfDays = 30;
    break;

  case 2:
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) noOfDays = 29;
    else noOfDays = 28;
}
console.log(noOfDays);
