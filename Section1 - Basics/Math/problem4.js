// Brute Force
function lcmAndGcd(a, b) {
	//code here
	let maxi = Math.max(a, b);
	let lcm = 0;
	let gcd = 0;
	while (true) {
		if (maxi % a == 0 && maxi % b == 0) {
			lcm = maxi;
			break;
		}
		maxi++;
	}
	gcd = (a * b) / lcm;
	console.log(lcm, gcd);
}
lcmAndGcd(14, 8);
