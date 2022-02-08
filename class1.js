class User{
    constructor(name){
        this.name=name;
    }

    sayHi(){
        console.log(this.name);
    }
}

var user1=new User("nidhi");
user1.sayHi();