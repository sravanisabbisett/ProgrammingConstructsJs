const readline=require('readline-sync');
let number=readline.questionInt("Enter your number from 0-9:");
if(number==0){
    console.log("zero");
}else if(number==1){
    console.log("One");
}else if(number==2){
    console.log("Two");
}else if(number ==3){
    console.log("three");
}else if(number==4){
    console.log("four");
}else if(number==5){
    console.log("Five");
}else if(number==6){
    console.log("six");
}else if(number==7){
    console.log("seven");
}else if(number==8){
    console.log("eight");
}else if(number==9){
    console.log("nine");
}else{
    console.log("Please enter correct number");
}