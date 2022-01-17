function employee(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}
let employee1 = new employee(1002, "nidhi", 10000);

let employee2 = new employee(1002, "deepa", 19222);
let employee3 = new employee(1003, "divya", 10000);
console.log(typeof employee1);
console.log(employee1);
console.log(employee2);
console.log(employee3);
