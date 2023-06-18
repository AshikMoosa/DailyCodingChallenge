function bubbleSort(arr, n) {
	//code here
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[i] < arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

/*Notes
Dont need to run inner loop n times last index will be sorted automatically
*/
