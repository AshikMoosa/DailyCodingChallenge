// BF - O(N^2)
var twoSum = function (nums, target) {
  let n = nums.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
        break;
      }
    }
  }
  return result;
};

// Better - O(N) - S(N)
var twoSum = function (nums, target) {
  let n = nums.length;
  const hashObj = {};
  for (let i = 0; i < n; i++) {
    let num = nums[i];
    let moreNeeded = target - num;
    if (hashObj.hasOwnProperty(moreNeeded)) {
      return [hashObj[moreNeeded], i];
    }
    hashObj[num] = i;
  }
};

/* Notes
In BF we use 2 loops hence O(N^2)
In Better we used an hashObj here hasOwnProperty has constant time(O(1)) 
*/
