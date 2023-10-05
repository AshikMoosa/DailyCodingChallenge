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

// Optimal - O(N) - S(1)
var singleNumber = function (nums) {
  let n = nums.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    result = result ^ nums[i];
  }
  return result;
};

/*Notes
In BF we use sorting which results in O(NlogN)

In Better approach we can use array hashing or hashmap, here array elements can be negative hence 
we cant use array hashing, so we use datastructure hashMap

In Optimal we used the concept of Bitwise XOR operator, the rules are :
XOR of two same numbers is always 0 i.e. a ^ a = 0. ←Property 1.
XOR of a number with 0 will result in the number itself i.e. 0 ^ a = a.  ←Property 2
Hence XOR all elements in array will give result
Assume the given array is: [4,1,2,1,2]
XOR of all elements = 4^1^2^1^2
      = 4 ^ (1^1) ^ (2^2)
      = 4 ^ 0 ^ 0 = 4^0 = 4
Hence, 4 is the single element in the array.
*/
