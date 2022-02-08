class Animal{
    constructor(name){
        this.name=name;
    }

    speak(){
        console.log(`${this.name} make the noise here`);


    }
}


class Dog extends Animal{

    constructor(name){
        super(name);
    }

    speak(){
        console.log(`${this.name} barks.`);
    }
}

let d=new Dog("doberman mikke");
d.speak();