// Brute Force O(N^2)
function insertionSort(arr, n) {
	for (let i = 1; i <= n - 1; i++) {
		let value = arr[i];
		let hole = i;
		while (hole > 0 && arr[hole - 1] > value) {
			arr[hole] = arr[hole - 1];
			hole--;
		}
		arr[hole] = value;
	}
	return arr;
}

let result = insertionSort([4, 1, 3, 9, 7], 5);
console.log(result);

/*Notes
Value holds current value from array on index i as arr[i]. Hole(imaginary) holds the current index.
For sorted array(Best case) condition arr[hole-1] > value always fails hence while loop wont execute
For unsorted array comparison will be made between prev element(hole-1) with current element/Value
and element inserted in right position.
Time complexity - O(N^2) - Worst & Avg case - O(N) - Best case
Due to no. of comparisons insertion sort is better than selection and bubble sort in real case
*/
