// Brute Force
function evenlyDivides(N) {
	let str = N.toString();
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		let num = Number(str[i]);
		if (N !== 0) {
			if (N % num === 0) {
				count++;
			}
		}
	}
	console.log(count);
}

evenlyDivides(12);

// Optimised O(log N)
function evenlyDivides(N) {
	let temp = N;
	let rem = 0;
	let result = 0;
	while (temp != 0) {
		rem = temp % 10;
		if (rem != 0 && N % rem == 0) result++;
		temp = parseInt(temp / 10);
	}
	console.log(result);
}

evenlyDivides(22074);

/*Note
if we dont check the condition rem!=0 few test case will run into dicision by zero exception.
Similarly for js we need parseInt in division else it takes rounded value which results in error.
*/
