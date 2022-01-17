let num=123;
let originalNum=num;
let reverse=0;
//for(i=1;i<n;i++)
while(num!=0)
{
	reverse=(reverse*10)+(num%10);
	
	num=parseInt(num/10);
}

if(originalNum==reverse)
console.log(originalNum +  "is paliendrome");
else
console.log(originalNum +  "not paliendrome");