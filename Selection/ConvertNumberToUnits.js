const readline=require('readline-sync');
let number=readline.questionInt("Enter your number:");

if(number==1){
    console.log("one");
}else if(number==10){
    console.log("Tens");
}else if(number==100){
    console.log("Hundereds");
}else{
    console.log("lease enter correct number");
}
