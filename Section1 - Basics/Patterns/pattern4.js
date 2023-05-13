function printTriangle(n) {
	let str = "";
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			str = str + i + " ";
		}
		str += "\n";
	}
	console.log(str);
}

printTriangle(5);
