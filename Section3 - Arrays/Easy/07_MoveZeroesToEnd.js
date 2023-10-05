// Brute Force
function moveZeroes(nums) {
  let n = nums.length;
  let p1 = 0;
  let p2 = 1;
  while (p2 < n) {
    if (nums[p1] === 0 && nums[p2] !== 0) {
      nums[p1] = nums[p2];
      nums[p2] = 0;
      p1++;
      p2 = p1 + 1;
    } else if (nums[p1] === 0 && nums[p2] == 0) {
      p2++;
    } else {
      p1++;
      p2 = p1 + 1;
    }
  }
  return nums;
}

let result = moveZeroes([0, 1, 0, 3, 12]);
console.log(result);
