// Brute Force - O(n^2)
function printTriangle(n) {
	let str = "";
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < i; j++) {
			str += "* ";
		}
		str += "\n";
	}

	for (let i = n; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			str += "* ";
		}
		str += "\n";
	}
	console.log(str);
}

printTriangle(3);

// Striver
function printTriangle(n) {
	let str = "";
	for (let i = 0; i < 2 * n - 1; i++) {
		let stars = i + 1;
		if (i >= n) stars = 2 * n - i - 1;
		for (let j = 0; j < stars; j++) {
			str += "* ";
		}
		str += "\n";
	}
	console.log(str);
}

printTriangle(5);
