/* 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

"use strict";
/* 
const validatePIN = (pin) => {
	const re = /\d/;
	const arr = [];
	pin.split("").map((x) => {
		if (re.test(x)) {
			arr.push(x);
		}
	});
	console.log(arr);
	if ((arr.length === 4 || arr.length === 6) && arr.length === pin.length) {
		return true;
	} else {
		return false;
	}
};
 */

const validatePIN = (pin) => /^(\d{4}|\d{6})$/.test(pin);
