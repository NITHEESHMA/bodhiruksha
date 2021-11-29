var hour = 12;
var isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  console.log("office closed");
} else console.log("open");
