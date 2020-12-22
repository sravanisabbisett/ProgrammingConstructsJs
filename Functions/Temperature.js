const readline = require('readline-sync');
let number = readline.questionInt("Enter 1 for fahernhit to centigrade and 2 for viceversa");
let temp_str = readline.questionInt("Enter temperature: ");
let temp = parseInt(temp_str);
// Converts farenheits to degree centigrades temperature
function farenheitToDegreeCentigrade(temp) {
	if (temp < 32 || temp > 212) {
		console.log("Invalid input!");
		return;
	}
	console.log("temp is degC is: " + ((temp - 32) * (5 / 9)));
}
// Converts centigrades to farenheits temperature
function centigradeToDegreeFarenheit(temp) {
	if (temp < 0 || temp > 100) {
		console.log("Invalid input!");
		return;
	}
	console.log("temp in degF is: " + ((temp * 9 / 5) + 32));
}
if (number == 1) {
	farenheitToDegreeCentigrade(temp);
} else if(number==2) {
	centigradeToDegreeFarenheit(temp);
}else{
    console.log("enter valid number");
}