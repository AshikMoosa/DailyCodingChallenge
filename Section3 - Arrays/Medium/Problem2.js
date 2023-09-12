// BF - O(N) - 2 pass
var sortColors = function (nums) {
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    } else if (nums[i] === 1) {
      oneCount++;
    } else {
      twoCount++;
    }
  }
  for (let i = 0; i < n; i++) {
    if (zeroCount) {
      nums[i] = 0;
      zeroCount--;
    } else if (oneCount) {
      nums[i] = 1;
      oneCount--;
    } else {
      nums[i] = 2;
      twoCount--;
    }
  }
};

/* Notes
In BF we are using 2 passes / 2 times using for loop.
*/
