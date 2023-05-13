function printTriangle(n) {
	let k = 2 * n - 2;
	let str = "";
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			str = str + j + " ";
		}
		if (k > 0) {
			str = str + " ".repeat(2 * k);
		}
		for (let x = i; x > 0; x--) {
			str = str + x + " ";
		}
		k = k - 2;
		str += "\n";
	}
	console.log(str);
}

printTriangle(5);
