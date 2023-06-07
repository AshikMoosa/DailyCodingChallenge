// Brute Force - O(N)
class Solution {
    long count=0;
    long sumOfSeries(long N) {
        // code here
        if(N<1)
            return count;
        count = count + (long)(Math.pow(N,3));
        sumOfSeries(N-1);
        return count;
    } 
}