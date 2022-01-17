function doSomething(x){
    x();
}



doSomething(function abc(){
    console.log("abc called");
});