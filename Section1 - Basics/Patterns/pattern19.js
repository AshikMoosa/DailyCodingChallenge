function printTriangle(n) {
	let str = "";
	for (let i = n; i > 0; i--) {
		for (let k = 0; k < i; k++) {
			str += "*";
		}
		for (let j = i; j < n; j++) {
			str += "  ";
		}
		for (let l = 0; l < i; l++) {
			str += "*";
		}
		str += "\n";
	}

	for (let i = 0; i < n; i++) {
		for (let k = 0; k <= i; k++) {
			str += "*";
		}
		for (let j = n; j > i + 1; j--) {
			str += "  ";
		}
		for (let l = 0; l <= i; l++) {
			str += "*";
		}
		str += "\n";
	}
	console.log(str);
}

printTriangle(5);
