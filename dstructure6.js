const myFunc=props=>{
    const{x,y}=props;
    console.log(x);
    console.log(y);
};


function anotherFunction(props){

    const{x,y}=props;
    console.log(x);
    console.log(y);
}

const obj={x:123,y:'yo yo'};

myFunc(obj);

anotherFunction(obj);

//123
//yoyo

//123

//yoyo