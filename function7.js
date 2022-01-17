function f1() {
  for (var i = 0; i < arguments.length; i++) console.log(arguments[i]);
  console.log("-------");
}

f1();
f1(1);
f1(2);
f1(6);
f1("a", "b");
f1("a", "b", "c", "d", "e");
f1(true, false, true, true, false, true);
f1("blue", "orange", "yellow", "indigo");
