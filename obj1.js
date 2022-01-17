//adding deleting new property to existing one

var msg1={
    to:87689990,
    msg:"how are you",
    delivered:true,
    read:
    false,
    from:876544567
};

for(property in msg1)
console.log(property+":" +msg1[property]);

console.log("-------");

msg1.timeStamp=10;

for(property in msg1)

console.log(property +":" +msg1[property]);
console.log("------");


delete msg1.from;

for(property in msg1)
console.log(property +":" +msg1[property]);