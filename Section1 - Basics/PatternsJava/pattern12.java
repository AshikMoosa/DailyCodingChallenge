void printTriangle(int n) {
    // code here
    int k=2*n -2;
    for(int i=1; i<=n; i++) {
        for(int j=1; j<=i; j++) {
            System.out.print(j + " ");
        }
        if(k>0) {
            System.out.print(" ".repeat(2*k));
        }
        for(int j=i; j>0; j--) {
            System.out.print(j+ " ");
        }
        k=k-2;
        System.out.print("\n");
    }
}