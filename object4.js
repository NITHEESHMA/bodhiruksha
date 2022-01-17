let myCar={

    name:"tiago",
    model:2018,
    color:"orange",
    speed:0,
    move:function () {
        this.speed++;        
    }
};

myCar.move();
myCar.move();
myCar.move();

console.log(myCar.speed);