const readline=require('readline-sync');
let day=readline.questionInt("Enter your number [1-7]");
if(day==1){
    console.log("Sunday");
}else if(day==2){
    console.log("Monday");
}else if(day==3){
    console.log("Tuesday");
}else if(day==4){
    console.log("Wednesday");
}else if(day==5){
    console.log("Thrusday");
}else if(day==6){
    console.log("Friday");
}else if(day==7){
    console.log("Saturday");
}else{
    console.log("Please enter correct choice");
}
