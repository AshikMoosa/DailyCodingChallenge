// Brute Force O(N^2)
function merge(arr, larr, lCount, rarr, rCount) {
	let i = 0,
		j = 0,
		k = 0;
	while (i < lCount && j < rCount) {
		if (larr[i] < rarr[j]) {
			arr[k++] = larr[i++];
		} else {
			arr[k++] = rarr[j++];
		}
	}
	while (i < lCount) arr[k++] = larr[i++];
	while (j < rCount) arr[k++] = rarr[j++];
	return arr;
}

function mergeSort(arr, n) {
	let mid;
	let larr = [];
	let rarr = [];
	if (n < 2) return;
	mid = parseInt(n / 2);
	for (let i = 0; i < mid; i++) {
		larr[i] = arr[i];
	}
	for (let i = mid; i < n; i++) {
		rarr[i - mid] = arr[i];
	}

	mergeSort(larr, mid);
	mergeSort(rarr, n - mid);
	return merge(arr, larr, mid, rarr, n - mid);
}

let result = mergeSort([4, 1, 3, 9, 7], 5);
console.log(result);
