// BruteForce O(n^2)
void printTriangle(int n) {
    // code here
    for(int i=0; i<n; i++) {
        for(int j=n; j>i+1; j--) {
            System.out.print(" ");
        }
        for(int k=0; k<=i; k++) {
            System.out.print("*");
        }
        for(int j=0; j<i; j++) {
            System.out.print("*");
        }
        System.out.print("\n");
    }
}

// Optimised O(n^2)
void printTriangle(int n) {
    // code here
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            System.out.print(" ");
        }
        for (int k = 1; k <= 2 * i - 1; k++) {
            System.out.print("*");
        }
        System.out.println();
    }
}