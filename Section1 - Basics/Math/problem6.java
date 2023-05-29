// Brute Force O(N^2)
long sumOfDivisors(int N) {
    // code here 
    long res =0;
    for(int i=1;i<=N;i++) {
        for(int j=1;j<=i;j++) {
            if(i%j==0)
                res = res + j;
        }
    }
    return res;
}

// Optimised O(RootN)
long sumOfDivisors(int N){
    // code here
    long res =0;
    for(int i=1;i<=N;i++) {
        res = res + i * (N/i);
    }
    return res;
}