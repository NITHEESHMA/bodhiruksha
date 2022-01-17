function song(id, name, year) {
  this.id = id,
    this.name = name,
    this.year = year,
    this.completeDetails = function () {
      return this.name + " " + this.year;
    },
    this.play = function () {
      console.log(this.name + "song is playing");
    };
}

var mySong = new song(123, "jana gana mana", 1970);
console.log(mySong.completeDetails());
