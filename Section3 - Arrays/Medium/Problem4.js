// BF - O(N^3)
var maxSubArray = function (nums) {
  let largest = nums[0];
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

/*Notes
Received TLE error on BF
*/
