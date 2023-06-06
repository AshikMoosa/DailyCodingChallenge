// BruteForce - O(N) S(N)
void printNames(int n, String name, int i) {
    // code here
    if (i > n) 
        return;
    System.out.println(name);
    printNames(n, name, i + 1);
}