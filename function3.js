function a() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log("---------");
  console.log();
}

a(1);
a(1, 2);
a(1, 2, 3);
a("192.168.1.98", "2654");
