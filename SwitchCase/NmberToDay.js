const readline = require('readline-sync');
let number=readline.questionInt("enter your number");
console.log(number);

switch (number) {
	case 0:
		console.log("sunday");
		break;
	case 1:
		console.log("monday");
		break;
	case 2:
		console.log("tuesday");
		break;
	case 3:
		console.log("wednesday");
		break;
	case 4:
		console.log("thrusday");
		break;
	case 5:
		console.log('friday');
		break;
	case 6:
		console.log("saturday");
		break;
	default:
		console.log("Invalid Input!");
}