// Brute Force
class Solution {
    int count = 1;
    int isPalindrome(String S) {
        // code here
        int len = S.length();
        if(len<=1)
            return 1;
        if(S.charAt(0)==S.charAt(len-1)) {
            isPalindrome(S.substring(1,len-1)) ;
        }
        else {
            count=0;
        } 
        return count;
    }
};