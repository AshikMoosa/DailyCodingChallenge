function printTriangle(n) {
	let str = "";
	for (let i = 1; i <= n; i++) {
		let k = 65 + n - 1;
		for (let j = 1; j <= i; j++) {
			str = str + String.fromCharCode(k);
			k--;
		}
		str += "\n";
	}
	console.log(str);
}

printTriangle(5);
