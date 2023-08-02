// BF - O(NLogN)
function missingNumber(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  let val;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) {
      val = i;
      break;
    }
  }
  return val;
}

let result = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
console.log(result);
