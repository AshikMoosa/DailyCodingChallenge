// Brute Force

is_palindrome(int n) {
      //code here
    int rev=0;
    int temp=n;
    int rem =0;
    while(temp!=0) {
        rem = temp% 10;
        rev = (rev * 10) + rem;
        temp = temp/10;
    }
    if(rev==n) 
        return "Yes";
    else 
        return "No";
}