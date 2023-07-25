// BruteForce - O(N)
function linearSearch(arr, n, num) {
  let val = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] == num) {
      val = i;
      break;
    }
  }
  return val;
}
let result = linearSearch([1, 2, 3, 4, 5], 5, 4);
console.log(result);
