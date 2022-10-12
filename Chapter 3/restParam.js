"use strict";

const average = (first = 0, ...rest) => {
	let sum = first;
	for (const value of rest) {
		sum += value;
	}
	return sum / (1 + rest.length);
};
