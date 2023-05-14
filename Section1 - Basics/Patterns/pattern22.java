void printSquare(int n) {
   // Print the upper half of the pattern
   for (int i = n; i >= 1; i--) {
       for (int j = n; j >= 1; j--) {
           System.out.print(Math.max(i, j) + " ");
       }
       for (int j = 2; j <= n; j++) {
           System.out.print(Math.max(i, j) + " ");
       }
       System.out.println();
   }
   
   // Print the lower half of the pattern
   for (int i = 2; i <= n; i++) {
       for (int j = n; j >= 1; j--) {
           System.out.print(Math.max(i, j) + " ");
       }
       for (int j = 2; j <= n; j++) {
           System.out.print(Math.max(i, j) + " ");
       }
       System.out.println();
   }
}