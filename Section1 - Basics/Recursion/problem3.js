// Brute Force - O(N)
function printNos(N) {
	//code here
	if (N < 1) return;
	process.stdout.write(`${N} `);
	printNos(N - 1);
}
printNos(10);
