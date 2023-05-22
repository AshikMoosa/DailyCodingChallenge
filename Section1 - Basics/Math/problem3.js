// Brute Force
function is_palindrome(n) {
	//code here
	let rev = 0;
	let rem = 0;
	let temp = n;
	while (n !== 0) {
		rem = n % 10;
		rev = rev * 10 + rem;
		n = parseInt(n / 10);
	}
	if (rev == n) {
		return "Yes";
	} else {
		return "No";
	}
}

is_palindrome(555);

/* Note
 In the given JavaScript program, if the function is_palindrome does not have an explicit return statement and used console.log,
 Then, JavaScript implicitly returns undefined. 
 Output will be
 Yes
 undefined

 Also note we used parseInt for division since js store decimals as well while dividing
*/
