// Brute force
function calcFactorial(n) {
	if (n == 0) return 1;
	return n * calcFactorial(n - 1);
}

function factorialNumbers(n) {
	let fact = [];
	for (let i = 1; i <= n; i++) {
		fact[i - 1] = calcFactorial(i);
		if (fact[i - 1] > n) {
			fact.pop();
			break;
		}
	}
	return fact;
}

let result = factorialNumbers(6);
console.log(result);

/*Notes
calFactorial calculates factorial of number using recursion in O(n).
fact.pop() method removes last element of array.
*/
