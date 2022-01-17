function employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.work = function () {
      console.log(this.name + " is working");
    },
      this.stop = function () {
        console.log(this.id + " is stopped working");
      },
     this.riseSalary=function(){
       this.salary=this.salary+(this.salary/100*percentage);
     } 
      ;
  }
  let employee1 = new employee(1002, "nidhi", 10000);
  let employee2 = new employee(1002, "vedha", 19222);
  let employee3 = new employee(1003, "vinu", 10000);
  
  console.log(employee1);
  console.log(employee2);
  console.log(employee3);
  employee1.work();
  employee2.work();
  
  employee2.stop();
  employee1.riseSalary(10);
  