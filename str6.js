//string methods

//charAt

let myString = "i can win";
console.log(myString.charAt(7));

//output start from index 0

//concat
let message = "i can win";
let v = message.concat(" by hardwork");
console.log(v);

//toUppercase()

var upper = "I can Win";
upperCase = upper.toUpperCase();
console.log(upperCase);

//tolowercase()

var upper = "I CAN WIN";
upperCase = upper.toLowerCase();
console.log(upperCase);

//tolocaluppercase()

var upper = "i can win";
upperCase = upper.toLocaleUpperCase();
console.log(upperCase);

//tolocallowercase()

var upper = "I Can Win";
upperCase = upper.toLocaleLowerCase();
console.log(upperCase);

//split

var message1 = "i can win";
var x = message1.split("a");
console.log(x[0]);

console.log(x[1]);

//slice(start,end)

let text = "i can win";
console.log(text.slice(0, 4));
console.log(text.slice(2, 4));
console.log(text.slice(6, 8));

//replace(substr,replacetext)

var text1 = "javascript rocks";
console.log(text1.replace(/rocks/, "developer"));

//lastIndexOf(substr,replacetext)

var text2 = "i can win";
console.log(text2.lastIndexOf("w"));

//charCode

var text4 = "i can win";
console.log(text4.charCodeAt(6));

//substring()
var text3 = "i can win";

console.log(text3.substring(2, 5));

//INDEXOF
var text4 = "i can win";
console.log(text4.indexOf("can"));

//lastindexof
var text5 = "i can win";
console.log(text5.lastIndexOf("can"));

//search

var text5 = "i can win";

console.log(text5.search("win"));

//match()

var text6 = "rain in spain";

console.log(text6.match("ain"));

//startwith()

let text7 = "i can win";

console.log(text7.startsWith("i"));

//endwith()

var text8 = "i can win";
console.log(text8.endsWith("x"));

//valueOf
var text9 = "i can win";

console.log(text9.valueOf(5));

//substr(start,length)

let text10='i can win';
console.log(text10.substr(0,4));