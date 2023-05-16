// BruteForce O(n^2)
function printTriangle(n) {
	let str = "";
	for (let i = n; i > 0; i--) {
		for (let j = i; j < n; j++) {
			str += " ";
		}
		for (let k = 0; k < i - 1; k++) {
			str += "*";
		}
		for (let l = 0; l < i; l++) {
			str += "*";
		}
		str += "\n";
	}
	console.log(str);
}

printTriangle(5);

// Optimised O(n^2)
function printTriangle(n) {
	let str = "";
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j < i; j++) {
			str += " ";
		}
		for (let k = 1; k <= 2 * (n - i) + 1; k++) {
			str += "*";
		}
		str += "\n";
	}
	console.log(str);
}

printTriangle(4);
