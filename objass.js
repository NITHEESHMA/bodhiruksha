let emp1 = new Object();
emp1.id = 1;
emp1.name = "nidhi";
emp1.doWork = function () {
  console.log(this.name + " is working");
};
console.log(emp1);
emp1.doWork();

let emp2 = new Object();
emp2.id = 2;
emp2.name = "vedha";
emp2.doWork = function () {
  console.log(this.name + " is working");
};
console.log(emp2);
emp2.doWork();

let emp3 = new Object();
emp3.id = 3;
emp3.name = "vinu";
emp3.doWork = function () {
  console.log(this.name + " is working");
};
console.log(emp3);
emp3.doWork();

let emp4 = new Object();
emp4.id = 4;
emp4.name = "nidhi";
emp4.doWork = function () {
  console.log(this.name + " is working");
};
console.log(emp4);
emp4.doWork();

let emp5 = new Object();
emp5.id = 5;
emp5.name = "anil";
emp5.doWork = function () {
  console.log(this.name + " is working");
};
console.log(emp5        );
emp5.doWork();
