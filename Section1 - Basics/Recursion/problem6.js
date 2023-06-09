// Brute Force
function reverseNumbers(arr, n, i) {
	if (n < i) return arr;
	let temp = arr[i];
	arr[i] = arr[n];
	arr[n] = temp;
	return reverseNumbers(arr, n - 1, i + 1);
}

let arr = [1, 2, 3, 4, 5];
let result = reverseNumbers(arr, arr.length - 1, 0);
console.log(result);
