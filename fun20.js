function boolean(a, b, c) {
  if ((a && b) || (b && c) || (a && c)) {
    return true;
  } else {
    return false;
  }
}
console.log(boolean(100));
console.log(boolean(111));
console.log(boolean(000));


//didnt get