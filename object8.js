var msg1 = {
  to: 6543324566,
  msg: "how r u?",
  delivered: true,
  read: false,
  from: 654378990,
};
for (prop in msg1) console.log(prop);

for (property in msg1);
console.log(property + ":" + msg1[property]);

console.log("--------");

console.log(msg1["delivered"]);

var keyX = "delivered";
console.log(msg1[keyX]);
