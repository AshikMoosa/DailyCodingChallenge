function printDiamond(n) {
	let str = "";
	for (let i = 0; i < n; i++) {
		for (let j = n; j > i + 1; j--) {
			str += " ";
		}
		for (let k = 0; k <= i; k++) {
			str += "* ";
		}
		str += "\n";
	}

	for (let x = n; x > 0; x--) {
		for (let y = n; y > x; y--) {
			str += " ";
		}
		for (let z = 0; z < x; z++) {
			str += "* ";
		}
		str += "\n";
	}
	console.log(str);
}

printDiamond(5);
