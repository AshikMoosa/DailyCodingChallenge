void printTriangle(int n) {
    // code here
    for(int i=0; i<n; i++) {
        int x=65;
        for(int j=n; j>i+1; j--) {
            System.out.print(" ");
        }
        for(int k=0; k<=i; k++) {
            System.out.print((char)x);
            x++;
        }
        x=65;
        String s = "";
        for(int j=0; j<i; j++) {
            s= (char)x+ s;
            x++;
        }
        System.out.print(s);
        System.out.print("\n");
    }
}