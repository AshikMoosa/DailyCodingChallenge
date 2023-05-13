//Brute-Force  O(n^2)
void printSquare(int n) {
        // code here
    for(int i=0;i<n;i++) {
        for(int j=0;j<n;j++) {
            System.out.print("* ");
        }
        System.out.print("\n");
    }
}

//Optimised  O(n)
void printSquare(int n) {
    // code here
    String str = "* ".repeat(n);
    for(int i=0;i<n;i++) {
        System.out.println(str);
    }
}
