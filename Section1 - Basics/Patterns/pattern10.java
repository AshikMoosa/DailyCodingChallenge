// Brute Force - O(n^2)
void printTriangle(int n) {
    // code here
    for(int i=0; i<n; i++) {
        for(int j=0; j<i; j++) {
            System.out.print("* ");
        }
        if(i!=0)
            System.out.print("\n");
    }
    for(int i=n; i>0; i--) {
        for(int j=0; j<i; j++) {
            System.out.print("* ");
        }
        if(i!=0)
            System.out.print("\n");
    }
}

// Striver
 void printTriangle(int n) {
    // code here
    for(int i=0; i<2*n-1; i++) {
        int stars = i+1;
        if(i>=n)
            stars = 2*n-i-1;
        for(int j=0;j<stars;j++) {
            System.out.print("* ");
        }
        System.out.println();
    }
    
    
}