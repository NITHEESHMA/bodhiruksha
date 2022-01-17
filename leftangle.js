var row=5;
var string="";
for(var i=1;i<=row;i++){
    for(var k=1;k<=row-i;k++){
        string += " ";
    }
    for(var j=1;j<=i;j++){
        string+="*";

    }
    string+="\n";
}
console.log(string);