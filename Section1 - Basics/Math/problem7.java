// Brute Force
String primeNumber(int n) {
    // code here
    int n=11;
    int flag=0;
    for(int i=2;i<=n;i++) {
        if(i!=n && n%i==0 ) {
            flag=1;
            break;
        }
    }
    if(flag==1)
        return "Not Prime";
    else
        return "Prime";
}
