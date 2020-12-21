//printing the power of two

const readline=require('readline-sync');
let number=readline.questionInt("Enter your number");
for(let i=0;i<number;i++){
    console.log("2 ^ " + i + " = " + 2 ** i);
}