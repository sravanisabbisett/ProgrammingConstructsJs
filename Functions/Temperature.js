const readline = require('readline-sync');
console.log("Enter temperature less than 32 and greater than 212 for F-C\n"+
			"Enter tempwrature less than 100 for C-F");
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
console.log("Enter y for F-C\n"+"Enter n for C-F");
if (readline.keyInYN("Enter your key:")) {
	farenheitToDegreeCentigrade(temp);
} else{
	centigradeToDegreeFarenheit(temp);
}