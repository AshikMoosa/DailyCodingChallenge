//  Brute Force
class Solution{
    static ArrayList<Long> factorialNumbers(long N){
        // code here
       ArrayList<Long> fact = new ArrayList<Long>();
       
       for(int i=1;i<=N;i++) {
           fact.add(calcFactorial(i));
           if(fact.get(i-1)>N) {
              fact.remove(i-1);
              break;
           }
       }
       return fact;
    }
    
    static long calcFactorial(long n) {
            if(n==0) 
                return 1;
            return n * calcFactorial(n-1);   
    }
    
}

/*Notes
You have to declare method calcFactorial static to call this method from static method factorialNumbers
and return type should also match everywhere
*/