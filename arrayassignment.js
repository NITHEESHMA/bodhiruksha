//push

let dailyActivities=['sleep','eat','sit','walk','exercise'];
let numbers=[1,2,3,4,5,6,6,7];

dailyActivities.push("cycling");//add element at end
console.log(dailyActivities);


//tostring()
console.log(dailyActivities.toString());

//length
console.log(dailyActivities.length);

//unshift
dailyActivities.unshift('work');//add element at start
console.log(dailyActivities);


//shift
dailyActivities.shift();
console.log(dailyActivities);//remove the first element


//sort
dailyActivities.sort();
console.log(dailyActivities);//element in alphabetical order


//indexof
const position=dailyActivities.indexOf('eat');
console.log(position);//finding the index position of string

//slice
const newDailyActivities=dailyActivities.slice(1);
console.log(newDailyActivities);//slicing the array element


//concat
let cancat1=['lazy'];
const concat1=dailyActivities.concat(cancat1);
console.log(concat1);//concatenating two array


//reverse
const reverse=dailyActivities.reverse();
console.log(reverse);//reverse the order


//lastindexof
const position1=dailyActivities.lastIndexOf('eat');
console.log(position1);//last index occurrence of an element

//join
const position2=dailyActivities.join("+");
console.log(position2);


//The splice() methods---- can be used to remove array elements:
let array2=['nidhi','vinu','vedha',2,3,5,6,7];
console.log(array2.splice(2,4));
console.log(array2);

//console.log(array2.slice(2,5));


//slice--slices out a piece of an array into a new array.
let array3=['nidhi','vinu','vedha',2,3,5,6,7];
console.log(array3.slice(2,5));
console.log(array3);




//map
const number1=numbers.map(myFunction);
function myFunction(value){
    return value*2;
}
console.log(number1);



//foreach
//Calls a function once for each array element.

const number2=numbers.forEach(myFunction);
function myFunction(value){
    return value;
}
console.log(number2);/////didnt get



//filter()----creates a new array with array elements that passes a test.

const number3=numbers.filter(myFunction);
function myFunction(value){
    return value>3;
}
console.log(number3);


//reduceRight() method --runs a function on each array element to produce a single value.works from right-to-left in the array.

const number5=numbers.reduceRight(myFunction);
function myFunction(sum,value){
    return sum+value;
}
console.log(number5);


//The every() ---method check if all array values pass a test.
let numbers1=[1,3,5,7,9];
const number6=numbers1.every(myFunction);
function myFunction(value){
    return value>4;
}
console.log(number6);



//reduce() method --- on each array element to produce (reduce it to) a single value.

const number4=numbers.reduce(myFunction);
function myFunction(sum,value){
    return sum+value;
}
console.log(number4);



//The some() method--- check if some array values pass a test.

const number7=numbers1.some(myFunction);
function myFunction(value){
    return value>4;
}
console.log(number7);



//find() method--- returns the value of the first array element that passes a test function.
const number8=numbers1.find(myFunction);
function myFunction(value){
    return value>4;
}
console.log(number8);
