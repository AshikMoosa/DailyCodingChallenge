// Brute Force - O(N^2)
function rotateArr(arr, d, n) {
  // code here
  for (let i = 0; i < d; i++) {
    let temp = arr[0];
    for (let j = 0; j < n; j++) {
      arr[j] = arr[j + 1];
    }
    arr[n - 1] = temp;
  }
  return arr;
}

var result = rotateArr([1, 2, 3, 4, 5], 2, 5);
console.log(result);

/*Notes
Received TLE Error on BF
*/
