// Brute Force
String armstrongNumber(int n) {
    // code here
    int temp = n;
    int result = 0, rem=0;
    while(temp!=0) {
        rem = temp% 10;
        result = result + (int)Math.pow(rem,3);
        temp=temp/10;
    }
    if(result==n)  
        return "Yes";
    else
        return "No";
}

/* Note
The Math.pow returns a double and we have to explicitly convert it to int.
There exist 2 methods
Using TypeCasting               - int value = (int)data;   // here data is double value
Using Double.intValue() method  - int value = newData.intValue(); // here newData is double value
*/