console.log(1 || 0);

console.log(null || 1);
console.log(null || 0 || 1);
console.log(undefined || null || 0);
//all falsy returned the last value

var o1=true||true;
var o2=false||true;
var o3=true||false;
var o4=false||(3==4);
var o5='cat'||'dog';
var o6=false||'cat';
var o7='cat'||false;

console.log(o1,o2,o3,o4,o5,o6,o7);