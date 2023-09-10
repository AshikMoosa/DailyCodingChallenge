// BF  - O(N^3)
function longestSubArr(arr, n, k) {
  let len = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum = sum + arr[k];
      }
      if (sum == k) {
        len = Math.max(len, j - i + 1);
      }
    }
  }
  return len;
}

let result = longestSubArr([1, 2, 3, 1, 1, 1, 1], 7, 3);
console.log(result);
