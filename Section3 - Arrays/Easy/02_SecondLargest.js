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

// Better - O(N)
function secondLargeSmall(a, n) {
  // write your code here
  let smallest = a[0];
  let largest = a[0];
  let secSmallest = a[0];
  let secLargest = -1;

  for (let i = 0; i < n; i++) {
    if (a[i] > largest) largest = a[i];
    if (a[i] < smallest) smallest = a[i];
  }

  secSmallest = largest;
  for (let i = 0; i < n; i++) {
    if (a[i] < largest && a[i] >= secLargest) secLargest = a[i];
    if (a[i] > smallest && a[i] <= secSmallest) secSmallest = a[i];
  }

  return [secLargest, secSmallest];
}

let result2 = secondLargeSmall([3, 4, 5, 2], 4);
console.log(result2);

/*Notes
In BF we are iterating from second last element for finding second largest & second first element to find second smallest
initially value for both second Largest & Smallest is -1 because if arr is [1,1,1,1,1] there is no second largest/smallestHence return -1. 

In Better approach do note if there is no secLargest or secSmallest it wont return [-1,-1]
*/
