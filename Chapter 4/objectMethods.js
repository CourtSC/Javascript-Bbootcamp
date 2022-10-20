"use strict";

let harry = {
	name: "Harry Smith",
	salary: 90000,
	raiseSalary(percent) {
		this.salary *= 1 + percent / 100;
	}, // Now we can raise harry's salary using dot notation as seen below.
};

harry.raiseSalary(10);

/* 
CAUTION: The this reference only works in functions declared with
function or the shortcut syntax that omits function, not with arrow
functions.
*/