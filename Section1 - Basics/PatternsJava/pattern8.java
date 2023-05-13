void printTriangle(int n) {
    // code here
    for(int i=n; i>0; i--) {
        for(int j=i; j<n; j++) {
            System.out.print(" ");
        }
        for(int j=0; j<i-1; j++) {
            System.out.print("*");
        }
        for(int j=0; j<i; j++) {
            System.out.print("*");
        }
        System.out.print("\n");
    }
}