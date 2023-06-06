// Brute Force - O(N)
function printNos(N) {
	//code here
	if (N == 0) return;
	printNos(N - 1);
	// console.log(N);
	process.stdout.write(`${N} `);
}
printNos(64);

// with constructor
class Solution {
	constructor() {
		this.s = "";
	}

	printNosRecur(N) {
		if (N === 0) {
			return;
		}
		this.printNosRecur(N - 1);
		this.s += N + " ";
	}
	printNos(N) {
		this.printNosRecur(N);
		console.log(this.s);
	}
}

/*Notes
Console.log wont print numbers in same line we need process.stdout.write
It takes only string as args and console.log behind the scene using stdout.write()

Also the solution with process.stdout.writewas not working in g4g & hence used string solution. 
*/
