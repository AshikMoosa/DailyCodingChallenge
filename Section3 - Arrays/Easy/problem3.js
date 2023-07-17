// Brute Force - O(N)
function arraySortedOrNot(arr, n) {
  // code here
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      return 0;
    }
  }
  return 1;
}

var result = arraySortedOrNot([10, 20, 30, 40, 50], 5);
console.log(result);

/*Notes
Here for loop index i starts from 1 else we get exception on accessing arr[-1] if i=0;
No clue why g4g fails, we can simply compare arr[i] < arr[0] to check arr is sorted.
*/
