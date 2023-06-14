// Brute Force
function frequencyCount(arr, N, P) {
	//precompute
	const hashArr = new Array(N + 1).fill(0);
	for (let i = 0; i < N; i++) {
		hashArr[arr[i]] += 1;
	}
	hashArr.shift();
	arr.length = 0;
	arr.push.apply(arr, hashArr);
	arr.length = N;
}

/*Notes
For the BF method we have to copy the hashArr to arr & this is not in place shift.
arr.length = N we have to reset the total size of arr, since it fails a condition
For Input: 
5
2 4 5 6 8
10
Your Output: 
0 1 0 1 1 NaN undefined NaN
*/
