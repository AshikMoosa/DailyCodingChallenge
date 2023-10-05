// BF - O(n)
function largest(arr, n) {
  // write your code here
  let largest = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

let result = largest([1, 8, 7, 56, 90], 5);
console.log(result);
