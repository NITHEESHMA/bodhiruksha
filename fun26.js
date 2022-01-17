
function getDays(month,year) {
return new Date(year, month, 0).getDate();
}
console.log(getDays(1,2000));
console.log(getDays(2,2021));