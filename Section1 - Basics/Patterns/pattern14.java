void printTriangle(int n) {
    // code here
    for(int i=1; i<=n; i++) {
        int k=65;
        for(int j=1; j<=i; j++) {
            System.out.print((char)k);
            k++;
        }
        System.out.print("\n");
    }
}