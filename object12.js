var emp = {
  name: "nidhi",
  salary: 657788,
  city: "bagaslore",
  set empCity(empCity) {
    this.city = empCity;
  },
  set empName(empName) {
    this.name = empName;
  },
};

emp.empName = "vedha";
emp.empCity = "thrissur";
console.log(emp.city);
console.log(emp["name"]);
