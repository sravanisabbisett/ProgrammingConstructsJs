const readline=require('readline-sync');
let number=readline.questionInt("Enter your number to find the factors of the number:");

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
            console.log(i);
        }
    }
}