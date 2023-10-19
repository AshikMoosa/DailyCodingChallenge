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

// Better - O(N) - S(N) - hashObj
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

// Better2 - O(N) - S(N) - hashMap
var twoSum = function (nums, target) {
  let n = nums.length;
  const hashMap = new Map();
  for (let i = 0; i < n; i++) {
    let num = nums[i];
    let moreNeeded = target - num;
    if (hashMap.has(moreNeeded)) {
      return [hashMap.get(moreNeeded), i];
    }
    hashMap.set(num, i);
  }
};

// Special Case-  O(NLogN) - output Yes/No if target exist as sum of 2 elem in array
var twoSum = function (nums, target) {
  nums.sort();
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let sum = nums[left] + nums[right];
    if (sum == target) {
      return "YES";
    } else if (sum < target) left++;
    else right--;
  }
  return "No";
};

/* Notes
In BF we use 2 loops hence O(N^2) this is bit more optimised since j loop runs from i+1, the real BF solution is when j also runs from 0
In Better we used a hashObj here hasOwnProperty has constant time(O(1)) 
In Better2 we used a hashMap here has, get ,set method has constant time(O(1))
In Special case we can only return yes or no, we cant return indices since we sort the array and lost original index
to solve this problem we have to store the array with index on hashmap and then sort and use 2ptr again its not optmised.
*/
