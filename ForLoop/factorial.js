//find factorial

const readline=require('readline-sync');
let number=readline.questionInt("Enter your number to find the factorial of the number");
let factorial=1;
for(let i=1;i<=number;i++){
    factorial *= i;
}
console.log("Factorial of number "+number+" is:"+factorial);