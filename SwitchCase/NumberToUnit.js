const readline=require('readline-sync');
let number=readline.questionInt("Enter your number:");

switch(number){
    case 1:
        console.log("ones");
        break;
    case 10:
        console.log("tens");
        break;
    case 100:
        console.log("Hundered");
        break;
    default:
        console.log("please enter correct number");
        break;
}