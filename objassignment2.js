function employee(id, name, salary,age,service) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.age=age;
    this.service=service;
this.work=function(){
    console.log(this.name+" is working");
},
this.stop=function(){
    console.log(this.id+" is stopped working");
}
    
  }
  let employee1 = new employee(1002, "nidhi", 10000,20,"developer");
  let employee2 = new employee(1002, "deepa", 19222,23,"testing");
  let employee3 = new employee(1003, "divya", 10000,43,"admin");
  let employee4 = new employee(1004, "vedha", 19222,23,"developer");
  let employee5 = new employee(1005, "vinod", 10000,43,"store keeper");
  


  console.log(employee1);
  console.log(employee2);
  console.log(employee3);
  console.log(employee4);
  console.log(employee5);

  employee1.work();
  employee1.stop();

  employee5.work();
  employee5.stop();
  