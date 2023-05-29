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

// Optimised O(RootN)
function sumOfDivisors(n) {
	//code here
	let res = 0;
	for (let i = 1; i <= n; i++) {
		res = res + i * parseInt(n / i);
	}
	console.log(res);
}
sumOfDivisors(5);

/*Note
Observe properly, you will find that all the numbers in total appear (N/i) times.
Like in 4
1s = 4/1 = 4 times  ==> 1x4 = 4
2s = 4/2 = 2 times  ==> 2x2 = 4
3s = 4/3 = 1 times  ==> 3x1 = 3
4s = 4/4 = 1 times  ==> 4x1 = 4
Total sum = 4+4+3+4 = 15 (Ans)
*/
