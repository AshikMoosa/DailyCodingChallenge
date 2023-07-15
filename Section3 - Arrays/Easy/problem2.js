// Brute Force - O(NlogN)
function secondLargeSmall(arr, n) {
  // write your code here
  arr.sort();
  let secLargest = -1,
    secSmallest = -1;
  let smallest = arr[0];
  let largest = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] !== largest) {
      secLargest = arr[i];
      break;
    }
  }
  for (let i = 1; i < n; i++) {
    if (arr[i] !== smallest) {
      secSmallest = arr[i];
      break;
    }
  }
  return [secLargest, secSmallest];
}

let result = secondLargeSmall([1, 2, 3, 4, 5], 5);
console.log(result);

/*Notes
In BF we are iterating from second last element for finding second largest & second first element to find second smallest
initially value for both second Largest & Smallest is -1 because if arr is [1,1,1,1,1] there is no second largest/smallestHence return -1. 
*/
