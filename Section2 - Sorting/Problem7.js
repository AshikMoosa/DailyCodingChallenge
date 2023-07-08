// Brute Force O(N^2)
function partition(arr, start, end) {
	let pivot = arr[end];
	let pIndex = start;
	for (let i = start; i < end; i++) {
		if (arr[i] <= pivot) {
			let temp = arr[i];
			arr[i] = arr[pIndex];
			arr[pIndex] = temp;
			pIndex++;
		}
	}
	let temp2 = arr[pIndex];
	arr[pIndex] = arr[end];
	arr[end] = temp2;
	return pIndex;
}

function quickSort(arr, start, end) {
	if (start >= end) return;
	let pIndex = partition(arr, start, end);
	quickSort(arr, start, pIndex - 1);
	quickSort(arr, pIndex + 1, end);
	return arr;
}

let result = quickSort([4, 1, 3, 9, 7], 0, 4);
console.log(result);
