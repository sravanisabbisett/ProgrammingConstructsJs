const readline = require('readline-sync');
let a = readline.questionInt("Enter first number: ");
let b = readline.questionInt("Enter second number:");
let c = readline.questionInt("Enter third number:");
let first = a + (b * c);
let second = (a % b) + c;
let third = c + (a / b);
let fourth = (a * b) + c;
console.log("first Arthemetic operation:"+first);
console.log("second Arthemetic operation:"+second);
console.log("Third Arthemetic operation:"+third);
console.log("Fourth Arthemetic operation:"+fourth);

if(first>second&&first>third&&first>fourth){
    console.log(first+" is maximum");
}else if(second>first&&second>third>second>fourth){
    console.log(second+" is maximum");
}else if(third>fourth&&third>second&&third>first){
    console.log(third+" is maximum");
}else if(fourth>first&&fourth>third>fourth>second){
    console.log(fourth+" is maximum");
}

if(first<second&&first<third&&first<fourth){
    console.log(first+" is mimimum");
}else if(second<first&&second<third<second<fourth){
    console.log(second+" is minimum");
}else if(third<fourth&&third<second&&third<first){
    console.log(third+" is mimimum");
}else if(fourth<first&&fourth<third&&fourth<second){
    console.log(fourth+" is mimimum");
}