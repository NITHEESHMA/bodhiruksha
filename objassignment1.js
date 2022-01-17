const car1 = {
  make: "ford",
  model: "figo",
  year: 2021,
  color: "white",
  owner: "nidhi",
  fuel: "petrol",
  engin: "977cc",
  speed: 0,

  move: function () {
    console.log("car is moving");
  },

  stop: function () {
    console.log("car stopped");
  },
  break: function () {
    console.log("car can break");
  },
};

const car2={
    make:"hundai",
    model:"120",
    year:2010
};

console.log(car1);
car1.move();
car1.stop();
car1.break();

console.log(car2);
