// Brute Force - O(n)
function primeNumber(n) {
	//code here
	let flag = 0;
	for (let i = 2; i <= n; i++) {
		if (i != n && n % i == 0) {
			flag = 1;
			break;
		}
	}
	if (flag == 1) {
		console.log("Not Prime");
	} else {
		console.log("Prime");
	}
}
primeNumber(11);
