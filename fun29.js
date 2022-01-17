function lottery(num) {
  if ((num % 4 == 6) && (num % 7 == 10))
  return  1; 
  
  
  else((num % 4 && num % 7 == 20)) 
  
  return 0;
}
console.log(lottery(3030));
console.log(lottery(30));
