
class employee{
    id=1;
    name='notspecified';
    #salary=2345;


get empSalary(){
    return this.#salary;
}



constructor(id,name,salary){
    this.id=id;
    this.name=name;
    this.#salary=salary;
}

}
let emp1=new employee(2,'ram',3455);
console.log(emp1);
console.log(emp1.empSalary);