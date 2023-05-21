// Brute Force
function reversedBits(N) {
	let res = (N >>> 0).toString(2);
	let parity = 32 - res.length;
	if (parity > 0) {
		res = "0".repeat(parity) + res;
	}
	res = res.split("").reverse().join("");
	let decimal = parseInt(res, 2);
	console.log(decimal);
}

reversedBits(12);
