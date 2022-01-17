function doSomething(x){
    x();
}

function abc(){
    console.log("abc called");
}

doSomething(abc);