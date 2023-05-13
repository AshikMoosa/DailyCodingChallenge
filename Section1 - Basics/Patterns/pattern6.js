function printTriangle(n) {
	let str = "";
	for (let i = n; i > 0; i--) {
		for (let j = 1; j <= i; j++) {
			str = str + j + " ";
		}
		str += "\n";
	}
	console.log(str);
}

printTriangle(5);
