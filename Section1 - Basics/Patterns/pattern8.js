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
