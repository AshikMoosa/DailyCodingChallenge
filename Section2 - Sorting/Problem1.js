function selectionSort(arr, n) {
	for (let i = 0; i <= n - 2; i++) {
		let selected = i;
		for (let j = i; j <= n - 1; j++) {
			if (arr[j] < arr[selected]) {
				selected = j;
			}
		}
		let temp = arr[i];
		arr[i] = arr[selected];
		arr[selected] = temp;
	}
	return arr;
}

let result = selectionSort([4, 1, 3, 9, 7], 5);
console.log(result);
