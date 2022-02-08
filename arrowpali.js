let pali = (num) => {
    
    let originalNum=num;
    let reverse=0;
    while(num!=0)
    {
        reverse=(reverse*10)+(num%10);
        
         num=parseInt(num/10);
    }
    
    if(originalNum==reverse)
    console.log(originalNum +  ":is palindrome");
    else
    console.log(originalNum +  ":not palindrome");
    
    }
    
    pali(123);
    pali(121);
    pali(431);
    pali(141);