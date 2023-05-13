function printTriangle(n) {
	let str = "";
	for (let i = n; i > 0; i--) {
		let k = 65;
		for (let j = 1; j <= i; j++) {
			str = str + String.fromCharCode(k);
			k++;
		}
		str += "\n";
	}
	console.log(str);
}
printTriangle(5);
