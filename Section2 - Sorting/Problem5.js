// Brute Force O(N^2)
function bubbleSort(arr, n) {
	if (n === 1) {
		return arr;
	}

	for (let i = 0; i < n - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			let temp = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = temp;
		}
	}

	return bubbleSort(arr, n - 1);
}

let result = bubbleSort([4, 1, 3, 9, 7], 5);
console.log(result);

/*Notes
In the case of recursive Bubble Sort, the recursion itself does not require extra space,
beyond the implicit space used by the call stack to keep track of the recursive function calls. 
The space used by the call stack is a natural part of the program execution,
 and is not considered "extra" space in the context of the algorithm.

However, it's important to note that the space complexity of Bubble Sort, whether iterative or recursive, 
is generally considered to be O(1) because the sorting is performed in-place within the input array. 
*/
