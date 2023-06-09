// Brute Force
class Solution {
	constructor() {
		this.count = 1;
	}
	isPalindrome(S) {
		//code here
		let len = S.length;
		if (len <= 1) return 1;
		if (S[0] == S[len - 1]) {
			this.isPalindrome(S.substring(1, len - 1));
		} else {
			this.count = 0;
		}
		return this.count;
	}
}

/*Notes
The above js program reached max call stack error after passing 10000 test cases for very large string.
The string with 1 character is also a palindrome hence if(len<=1) return 1

*/
