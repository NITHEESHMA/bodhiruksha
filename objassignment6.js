function Clock(hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;

  this.setClock = function (seconds) {
    this.hours = parseInt(seconds / 3600);
    this.minutes = parseInt(seconds - this.hours * 3600) / 60;
    this.seconds = seconds - this.hours * 3600 - this.minutes * 60;
  };
  this.getHour = function () {
    return this.hours;
  };

  this.setHour = function () {
    this.hours = hours;
  };

  this.setMinute = function () {
    this.minutes = minutes;
  };

  this.tick = function () {
    this.seconds++;
    if (this.seconds == 60) {
      this.seconds = 0;
      this.minutes++;
    }

    if (this.minutes == 60) {
      this.minutes = 0;
      this.hours++;
    }
  };

  this.now = function () {
    return this.hours + ":" + this.minutes + ":" + this.seconds;
  };
}
let clock1 = new Clock(11, 29, 45);
console.log(clock1);
clock1.setClock(10000);
console.log(clock1.getHour);
console.log(clock1.setHour);
console.log(clock1.setMinute);
clock1.tick();
console.log(clock1.now());
