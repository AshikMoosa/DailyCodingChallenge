function printSquare(n) {
	let str = "";
	// Print the upper half of the pattern
	for (let i = n; i >= 1; i--) {
		for (let j = n; j >= 1; j--) {
			str = str + Math.max(i, j) + " ";
		}
		for (let j = 2; j <= n; j++) {
			str = str + Math.max(i, j) + " ";
		}
		str += "\n";
	}

	// Print the lower half of the pattern
	for (let i = 2; i <= n; i++) {
		for (let j = n; j >= 1; j--) {
			str = str + Math.max(i, j) + " ";
		}
		for (let j = 2; j <= n; j++) {
			str = str + Math.max(i, j) + " ";
		}
		str += "\n";
	}
	console.log(str);
}

printSquare(4);
