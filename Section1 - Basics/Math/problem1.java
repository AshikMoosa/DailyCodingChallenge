// Brute Force O(N)
int evenlyDivides(int N){
    // code here
    String str = String.valueOf(N);
    int count = 0;
    for(int i=0;i<str.length();i++) {
        int num = str.charAt(i) - '0'; 
        if(num!=0) {
            if(  N % num == 0) {
                count++;
            } 
        }
        
    }
    return count;
}

// Optimised O(log N)
int evenlyDivides(int N){
    // code here
    int temp = N;
    int rem = 0;
    int result = 0;
    while(temp!=0) {
        rem = temp % 10;
        if(rem!=0 && N%rem==0) 
            result++;
        temp=temp/10;
    }
    return result;
}
