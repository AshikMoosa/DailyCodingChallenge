// BF - O(n + m + k),
function findUnion(arr1, arr2, n, m) {
  //your code here
  let k = arr1[n - 1] > arr2[m - 1] ? arr1[n - 1] : arr2[m - 1];
  const hashArr = new Array(k + 1).fill(0);
  for (let i = 0; i < k; i++) {
    hashArr[arr1[i]] += 1;
    hashArr[arr2[i]] += 1;
  }

  let j = 0;
  for (let i = 0; i <= k; i++) {
    if (hashArr[i] > 0) {
      hashArr[j] = i;
      j++;
    }
  }
  hashArr.length = j;
  return hashArr;
}

let result = findUnion([1, 2, 3, 4, 5], [1, 2, 3], 5, 3);
console.log(result);
