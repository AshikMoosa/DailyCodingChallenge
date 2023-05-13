function printTriangle(n) {
	let str = "";
	let k = 65;
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			str = str + String.fromCharCode(k);
		}
		k++;
		str += "\n";
	}
	console.log(str);
}
printTriangle(5);
