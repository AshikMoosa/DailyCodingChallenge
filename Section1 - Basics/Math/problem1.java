// Brute Force
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

