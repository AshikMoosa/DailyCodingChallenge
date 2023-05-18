//Brute-Force  O(n^2)
void printSquare(int n) {
        // code here
    for(int i=0;i<n;i++) {
        for(int j=0;j<n;j++) {
            System.out.print("* ");
        }
        System.out.print("\n");
    }
}

//Optimised  O(n)
void printSquare(int n) {
    // code here
    String str = "* ".repeat(n);
    for(int i=0;i<n;i++) {
        System.out.println(str);
    }
}

/*
Time Complexity - Optimised  O(n)
 String repetition: The line String str = "* ".repeat(n); creates a string str by repeating the character sequence "* " n times. 
 The repeat method has a time complexity of O(n) because it needs to concatenate the repeated sequence n times. Therefore, this step takes O(n) time.
 
 Loop iteration: The loop for(int i=0;i<n;i++) iterates n times. 
 Within each iteration, it prints the string str using System.out.println(str);. 
 Since the string str has a fixed length, the printing operation takes constant time, which can be considered O(1) and repeats n times so O(n).

 Therefore, the correct time complexity of the given Java program is O(n) as both steps, the string repetition and the loop iteration, have a time complexity of O(n).
 
 Space Complexity
 The space complexity of the given Java program is O(n), where 'n' is the input parameter representing the side length of the square pattern.
 In the program, the space complexity is primarily determined by the String object str, which holds the repeated asterisk pattern. 
 The size of str depends on the value of 'n'. It stores the repeated asterisk sequence "* " n times. 
 Since the length of the repeated sequence is directly proportional to 'n', the space required to store str is also O(n).
 */