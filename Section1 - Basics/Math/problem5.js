// Brute Force
function armstrongNumber(n) {
	//code here
	let temp = n;
	let result = 0,
		rem = 0;
	while (temp != 0) {
		rem = temp % 10;
		result = result + Math.pow(rem, 3);
		temp = parseInt(temp / 10);
	}
	if (result === n) return "Yes";
	else return "No";
}
armstrongNumber(153);
