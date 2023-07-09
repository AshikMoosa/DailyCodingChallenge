function insertionSort(arr, i, n) {
	if (i >= n) {
		return arr;
	}

	let value = arr[i];
	let hole = i;

	while (hole > 0 && arr[hole - 1] > value) {
		arr[hole] = arr[hole - 1];
		hole--;
	}

	arr[hole] = value;

	return insertionSort(arr, i + 1, n);
}

let result = insertionSort([4, 1, 3, 9, 7], 1, 5);
console.log(result);
