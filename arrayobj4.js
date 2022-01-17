var user={
    name:'nidhi',
    age:100
};

var clone = {};
Object.assign(clone,user);


for (let key in user){
    clone[key] = user[key];

}

console.log(user);
console.log(clone);

clone.name='vedha';
console.log(user);
console.log(clone);