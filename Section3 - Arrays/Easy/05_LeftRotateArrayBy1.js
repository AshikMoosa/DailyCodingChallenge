// Brute Force - O(N^2)
function rotateArr(arr, n) {
  // code here
  let temp = arr[0];
  for (let i = 0; i < n; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp;
  return arr;
}

var result = rotateArr([1, 2, 3, 4, 5], 5);
console.log(result);
