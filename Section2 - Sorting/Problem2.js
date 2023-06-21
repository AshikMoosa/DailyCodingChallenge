// Brute Force O(N^2)
function bubbleSort(arr, n) {
	for (let i = 0; i <= n - 2; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

let result = bubbleSort([4, 1, 3, 9, 7], 5);
console.log(result);

/*Notes
Dont need to run inner loop n times last index will be sorted automatically
Also, here max element will be in right position at each iterations(last pos)
Hence j loop always start from 0 and doens't reach final position/ sorted positions
*/
