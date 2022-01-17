function song(name, artist, year) {
  this.name = name;
  this.artist = artist;
  this.year = year;
  this.sing = function () {
    console.log("song sang");
  },
    this.enjoy = function () {
      console.log("song enjoyed");
    };
}
let song1 = new song("jana gana mana", "r tagor", 1987);
let song2 = new song("jai hoo", "rahman", 1922);
let song3 = new song("omana thigal kidavo", "thambi", 1922);

console.log(song1);
console.log(song2);
console.log(song3);
song1.sing();
song1.enjoy();
