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
