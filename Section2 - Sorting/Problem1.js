// Brute Force - O(N^2) - worst sorting algorithm
function selectionSort(arr, n) {
	for (let i = 0; i <= n - 2; i++) {
		let selected = i;
		for (let j = i + 1; j <= n - 1; j++) {
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

/*Notes
In selection sort we find min element in each iteration and put it in its place.
Also no need run i to last element, it will be sorted in final iteration automatically
selected = j, updating index of min element
then swapping it to its proper position.

			Best					Avg						Worst
T(N)	Ω(N^2)			 θ(N^2)					O(N^2)
S(N)															O(1)
*/
