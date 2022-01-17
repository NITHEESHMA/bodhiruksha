function song(name, artist, year) {
  this.name = name;
  this.artist = artist;
  this.year = year;
}
let song1 = new song("jana gana mana", "r tagor", 1987);

let song2 = new song("haiii", "nidhi", 1922);
let song3 = new song("vandhe madharam", "tagore", 1922);
console.log(typeof song1);
console.log(song1);
console.log(song2);
console.log(song3);
