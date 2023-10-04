// BF - O(NlogN)
var majorityElement = function (nums) {
  let n = nums.length;
  let half = Math.ceil(n / 2); // 4.5 => 5

  nums.sort();
  let count = 1; // array never empty, always 1 element
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== nums[i + 1]) {
      if (count < half) {
        count = 1;
      } else {
        result = nums[i];
        count = 1;
      }
    } else {
      count++;
    }
  }
  return result;
};
