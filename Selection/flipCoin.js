//Flipcoin
let randomCheck=Math.floor(Math.random()*10)%2;
const HEAD=1;
if(randomCheck==1){
    console.log("Coin flips head");
}else{
    console.log("Coin flips tail");
}