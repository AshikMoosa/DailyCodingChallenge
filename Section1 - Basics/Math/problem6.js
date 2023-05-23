// Brute Force - O(n^2)
function sumOfDivisors(n) {
	//code here
	let res = 0;
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			if (i % j == 0) res = res + j;
		}
	}
	console.log(res);
}
sumOfDivisors(4);
