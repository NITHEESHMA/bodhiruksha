const myFunc=({x,y})=>{
    console.log(x);
    console.log(y);
};


const obj={x:123,y:'yo yo'};

myFunc(obj);


function anotherFunction({x,y}){

    console.log(x);
    console.log(y);
}
anotherFunction(obj);

//123

//yoyo
//123
//yoyo