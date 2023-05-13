void printDiamond(int n) {
    // Your code here
    for(int i=0; i<n; i++) {
        for(int j=n; j>i+1; j--) {
            System.out.print(" ");
        }
        for(int j=0; j<=i; j++) {
                System.out.print("* ");  
        }
        System.out.print("\n");
    }
    for(int i=n; i>0; i--) {
        for(int j=n; j>i; j--) {
            System.out.print(" ");
        }
        for(int j=0; j<i; j++) {
            System.out.print("* ");
        }
        System.out.print("\n");
    } 
}