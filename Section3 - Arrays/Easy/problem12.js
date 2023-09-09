// BF - O(NlogN)
var singleNumber = function (nums) {
  let result = 0;
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      i++;
    } else {
      result = nums[i];
    }
  }
  return result;
};

/*Notes
In BF we use sorting which results in O(NlogN)

*/
