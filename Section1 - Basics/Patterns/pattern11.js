function printTriangle(n) {
	let str = "";
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			if ((i + j) % 2 == 0) {
				str += "1 ";
			} else {
				str += "0 ";
			}
		}
		str += "\n";
	}
	console.log(str);
}

printTriangle(3);
