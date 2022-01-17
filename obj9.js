function employee(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
  this.age = -1;
}

emp1 = new employee(123, "jack", 398778);
emp1.city = "bangalore";

emp2 = new employee(111, "mack", 976677);

console.log(emp1);
console.log(emp2);
