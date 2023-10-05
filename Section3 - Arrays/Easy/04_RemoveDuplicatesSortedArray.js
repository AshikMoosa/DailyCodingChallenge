// Brute Force - O(N^2)
function remove_duplicate(arr, n) {
  // code here
  for (let i = 0; i < n; i++) {
    if (arr[i] == arr[i + 1]) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

var result = remove_duplicate([1, 2, 2, 4], 4);
console.log(result);
