// Brute Force
class Solution {
    public static void main(String[] args) {
        int[] arr= {1,2,3,4,5};
        int[] result = reverseNumbers(arr,arr.length-1,0);
        for(int i=0;i<arr.length;i++) {
            System.out.print(result[i]);
        }
        
    }
    
    static int[] reverseNumbers(int[] arr,int n,int i) {
    if(n<i)
        return arr;
    int temp = arr[i];
    arr[i]=arr[n];
    arr[n]=temp;
    return reverseNumbers(arr,n-1,i+1);
    }
}

// Note - we need a for loop to print contents of an array, cant use console.log like in js