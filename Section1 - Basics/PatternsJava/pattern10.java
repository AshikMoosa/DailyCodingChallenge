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