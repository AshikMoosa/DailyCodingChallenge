// BF - O(N^3)
var maxSubArray = function (nums) {
  let largest = Number.MIN_VALUE; // not really the lowest value, it is greater than 0
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum = sum + nums[k];
      }
      if (sum > largest) largest = sum;
    }
  }
  return largest;
};

// Better - O(N^2)
var maxSubArray = function (nums) {
  let largest = Number.MIN_VALUE;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum = sum + nums[j];
      if (sum > largest) largest = sum;
    }
  }
  return largest;
};

// Optimised - O(N)
var maxSubArray = function (nums) {
  let largest = Number.NEGATIVE_INFINITY;
  let sum = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    sum = sum + nums[i];

    if (sum > largest) largest = sum;

    if (sum < 0) sum = 0;
  }
  return largest;
};

/*Notes
Received TLE error on BF & Better
Note Number.MIN_VALUE < 0 return false since its not negative value
Note Number.NEGATIVE_INFINITY < 0 return true since -infinity < 0 
In BF we generate all subarrays using 3 nested loops and find largest sum
In Better we removed innermost loop and calculated sum in each iteration of j, hence we store previous sum & returned largest

In Optimal solution we use Kadane's Algorithm
-The intuition of the algorithm is not to consider the subarray as a part of the answer if its sum is less than 0
*/
