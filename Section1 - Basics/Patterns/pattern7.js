// BruteForce O(n^2)
function printTriangle(n) {
	let str = "";
	for (let i = 0; i < n; i++) {
		for (let j = n; j > i + 1; j--) {
			str += " ";
		}
		for (let k = 0; k <= i; k++) {
			str += "*";
		}
		for (let l = 0; l < i; l++) {
			str += "*";
		}
		str += "\n";
	}
	console.log(str);
}

printTriangle(4);

// Optimised O(n^2)
function printTriangle(n) {
	let str = "";
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n - i; j++) {
			str += " ";
		}
		for (let k = 1; k <= 2 * i - 1; k++) {
			str += "*";
		}
		str += "\n";
	}
	console.log(str);
}

printTriangle(4);
