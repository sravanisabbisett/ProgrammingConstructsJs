const readline=require('readline-sync');
//taking teh user input
let number=readline.questionInt("Enter your number:");
//array declaration
let array=new Array();
for(let i=2;i<=number;i++){
    if(number%i==0){
        let isPrime=1;
        for(j=2;j<=i/2;j++){
            if(i%j==0){
                isPrime=0;
                break;
            }
        }
        if(isPrime==1){
            array.push(i);
        }
    }
}
console.log("Printing the prime factors of an number");
console.log(array);