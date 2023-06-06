// BruteForce - O(N) S(N)
function printNames(n, name, i) {
	if (i > n) return;
	console.log(name);
	printNames(n, name, i + 1);
}

printNames(3, "abc", 1);

// With only variable N & no extra variables
function printName(name, n) {
	if (n <= 0) {
		return; // Base case: stop recursion when n becomes 0 or negative
	}

	console.log(name);
	printName(name, n - 1); // Recursive call with n decremented by 1
}

printName("abc", 3);

/*Notes
The time complexity is O(N) because the program makes n recursive calls(function calls), where n is the input value. 
Each recursive call performs a constant amount of work, such as printing the name, so the total time taken is directly proportional to n.

The space complexity is also O(N) because the program uses the call stack(internally) to store the recursive function calls. 
Since the maximum depth of the recursion is n, the space required in the call stack is proportional to n.
*/
