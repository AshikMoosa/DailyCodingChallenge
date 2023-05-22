// Brute Force
Long[] lcmAndGcd(Long A , Long B) {
    // code here
    long maxi = Math.max(A, B);
    long lcm = 0;
    long gcd = 0;
    while (true) {
      if (maxi % A == 0 && maxi % B == 0) {
        lcm = maxi;
        break;
      }
      maxi++;
    }
    gcd = (A * B) / lcm;
    Long[] ans = new Long[2];
    ans[0] = lcm;
    ans[1] = gcd;
    return ans;
}

/* Note
The return type of method is array of Long not long or int
*/