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

// Better - O(N) - S(N)
var missingNumber = function (nums) {
  let n = nums.length;
  let missingNum = -1;
  const hashArr = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    hashArr[nums[i]] += 1;
  }

  for (let i = 0; i <= n; i++) {
    if (hashArr[i] === 0) {
      missingNum = i;
    }
  }
  return missingNum;
};

// Optimal - O(N) - S(1)
var missingNumber = function (nums) {
  let n = nums.length;
  let missingNum = -1;
  let realSum = (n * (n + 1)) / 2;
  let arrSum = 0;

  for (let i = 0; i < n; i++) {
    arrSum = arrSum + nums[i];
  }

  missingNum = realSum - arrSum;
  return missingNum;
};

/*Notes
In BF - we used sorting hence O(NLogN)
In Better - we used hashMap hence O(N) with extra space of S(N)
In Optimal - we use mathematical formula n(n+1)/2 for sum of n numbers to find missing number
*/
