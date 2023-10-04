// Optimised - O(N)
var maxSubArray = function (nums) {
  let largest = Number.NEGATIVE_INFINITY;
  let sum = 0;
  let n = nums.length;

  // for printing maxsubarray
  let start = 0;
  startIndex = -1;
  endIndex = -1;

  for (let i = 0; i < n; i++) {
    if (sum === 0) start = i;
    sum = sum + nums[i];

    if (sum > largest) {
      largest = sum;
      startIndex = start;
      endIndex = i;
    }

    if (sum < 0) sum = 0;
  }

  // Prints maxsubarray
  for (let i = startIndex; i <= endIndex; i++) {
    console.log(nums[i]);
  }

  return largest;
};

/*Notes
We used same kadane's algorithm to find largest. but this time inorder to print largest subarray we need indexes
everytime new subarray starts when sum==0, hence we declare start = i when sum ==0
and when we find largest when sum > largest, that will be the point of largest subarray. 
Hence we compute startIndex and endIndex at that place.
*/
