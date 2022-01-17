var time = 15;
var greetings = "not set yet";
if (time < 10) {
  greetings = "good mornig";
} else if (time < 20) {
  greetings = "good day";
} else {
  greetings = "good evening";
}

console.log(greetings);
