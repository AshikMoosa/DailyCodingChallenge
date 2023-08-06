// Optimised - O(n)
var check = function (nums) {
  let count = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
    }
  }
  if (nums[0] < nums[len - 1]) {
    count++;
  }

  if (count <= 1) return true;
  else return false;
};

/*Notes 
Check how many times ascending order breaks and also check if 1st item smaller than last item 
in these cases increment count. if count is <= 1 yes the array is sorted even after rotation
else not. For sorted array there will only 1 case of breaking ascending order.
*/
