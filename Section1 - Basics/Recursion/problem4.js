// Brute Force - O(N)
let sum = 0;
function sumOfSeries(N) {
	//code here
	if (N < 1) return count;
	sum = sum + Math.pow(N, 3);
	sumOfSeries(N - 1);
	return sum;
}
sum = sumOfSeries(5);
console.log(sum);

// Iterative
function sumOfSeries(N) {
	let sum = 0;
	for (let i = 1; i <= N; i++) {
		sum += Math.pow(i, 3);
	}
	return sum;
}

const N = 5;
const seriesSum = sumOfSeries(N);
console.log(seriesSum); // Output: 225

/*Notes
The above program fails when N=50000 due to exceeding max call stack size due to recursion & in this case iterative solution is more efficient.
*/
