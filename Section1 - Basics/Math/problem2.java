// Brute Force
Long reversedBits(Long X) {
    // code here
    String res = Long.toBinaryString(X);
    int parity = 32 - res.length();
    if(parity>0) {
        res = "0".repeat(parity) + res;
    }
    StringBuilder revRes = new StringBuilder();
    revRes.append(res);
    revRes.reverse();
    String revStr = revRes.toString();
    long decimal=Long.parseLong(revStr,2);  
    return decimal;
  
}

