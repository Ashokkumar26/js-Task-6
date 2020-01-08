function myfunction(){
	n = document.getElementById('nums').value;
        let num=0;		
for(var i=1; i <= n; i++){
         num = num + i;
    }
    document.getElementById('no').innerHTML = num;
}
function prno() {
var num = document.getElementById('pr').value;
 z = document.getElementById('demo');	
  var i; 
  var Number = 1; 
  var count;  
  while(Number <= num){
    count = 0;
    i = 2;
    while(i <= Number/2)
    {
      if(Number%i == 0)
      {
        count++;
	break;
      }
      i++;	
    }	
    if(count == 0 && Number != 1 )
    {
	z.innerHTML += Number + '<br>';
    }
    Number++
}
}
function myfun() {
	var n =document.getElementById('perf').value;
var number=1;
do { 
	document.getElementById('demo1').innerHTML +='Even number is ' + number + '<br>';
	number+=2;
}
while(number<=n);
var  number = 2;
do { 
	document.getElementById('demo2').innerHTML +='Odd number is ' + number + '<br>';
	number+=2;
}
while(number<=n);
      document.getElementById('demo3').innerHTML = 'minimum value is '+ Math.min(n-(n-1));
      document.getElementById('demo4').innerHTML = 'maximum value is '+ Math.max(n);
          let num=0;
          let i = 0;
          do{
          	num = num + i;
          	i++
          }		
       while(i <= n);
       document.getElementById('demo5').innerHTML = 'Average number is ' + num/n;
    for(i=1; i<=n; i++) {
        sum = 0;
        for(j=1; j<i; j++) {
            if(i % j == 0)
            {
                sum += j;
            }
        }
        if(sum == i)
        {
            document.getElementById('demo6').innerHTML += 'Perfect number is ' + i +'<br>';
        }
    }

   }