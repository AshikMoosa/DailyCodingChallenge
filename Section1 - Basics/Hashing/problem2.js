//  Brute Force - O(N^2)
function topK(arr, k) {
	// code here
	const hashArr = new Array(10001).fill(0);
	let resArr = new Array(k);
	for (let i = 0; i < arr.length; i++) {
		hashArr[arr[i]] += 1;
	}

	// run loop k times to find k max values
	let max = 0;
	for (let i = 0; i < resArr.length; i++) {
		for (let j = 0; j < hashArr.length; j++) {
			if (hashArr[j] >= max) {
				max = hashArr[j];
				resArr[i] = j;
			}
		}
		hashArr[resArr[i]] = 0;
		max = 0;
	}

	console.log(resArr);
}

topK([1, 1, 2, 2, 3, 3, 3, 4], 2);

/*Notes
For BF received time limit error. Also note we have to create a hashArray of 10^5 + 1 to get last digit frequency.
*/
