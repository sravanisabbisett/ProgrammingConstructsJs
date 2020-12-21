//Generate Random Value
let randomNumber=Math.floor(Math.random()*10);
console.log("Random number is "+randomNumber);

//Generate Randam Dice Number
let diceRandomNumber=Math.floor(Math.random()*10)%6+1;
console.log("Random number is "+diceRandomNumber);

//AddTwoRandomDiceNumber
let addDiceValue=Math.floor(Math.random()*10)%6+1+Math.floor(Math.random()*10)%6+1;
console.log("Adding two Random Dice Number:"+addDiceValue);

//Add five 3 digit Random number find sum and average
let sum=0;
for(let i=0;i<5;i++){
    let randomThreeDigitNumber=Math.floor(Math.random()*90+10);
    console.log("Random Number is:"+randomThreeDigitNumber);
    sum+=randomThreeDigitNumber;
}
console.log("Sum of 5 three digit Random Number is:"+sum);
console.log("Average of 5 three didit random is:"+(sum/5));