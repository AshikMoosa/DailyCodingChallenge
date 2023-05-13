//Brute-Force  O(n^2)
function printSquare(n) {
	let str = "";
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			str += "* ";
		}
		str += "\n";
	}
	console.log(str);
}

printSquare(5);

//Optimised  O(n)
function printSquare(n) {
	let str = "* ".repeat(n);
	for (let i = 0; i < n; i++) {
		console.log(str);
	}
}

printSquare(7);
