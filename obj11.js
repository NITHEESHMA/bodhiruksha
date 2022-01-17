//prototype property

function employee(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}

employee.prototype.city = "not specified";
employee.prototype.doSomething = function () {
  console.log(this.name + " is doing something");
};

emp1 = new employee(1, "nidhi", 4322);
emp2 = new employee(1, "vedha", 9876);

console.log(emp1.name);
console.log(emp2.name);

emp1.city = "bangalore";

console.log(emp1.city);
console.log(emp2.city);

emp1.doSomething();
emp2.doSomething();
