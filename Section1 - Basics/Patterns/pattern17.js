function printTriangle(n) {
	let str = "";

	for (let i = 0; i < n; i++) {
		let x = 65;
		for (let j = n; j > i + 1; j--) {
			str = str + " ";
		}
		for (let k = 0; k <= i; k++) {
			str = str + String.fromCharCode(x);
			x++;
		}
		x = 65;
		let s = "";
		for (let j = 0; j < i; j++) {
			s = String.fromCharCode(x) + s;
			x++;
		}
		str = str + s;
		str += "\n";
	}
	console.log(str);
}

printTriangle(5);
