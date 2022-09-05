// break
let arr = [1, 2, 3, -4, 5];
let i = 0;
while (i < arr.length) {
	if (arr[i] < 0) break;
	console.log(arr[i]);
	i++;
}

// loop termination via boolean
i = 0;
let found = false;
while (!found && arr.length) {
	console.log(i);
	if (arr[i] < 0) {
		found = true;
	} else {
		i++;
	}
}

// labeled break - not commonly used
i = 0;
let j = 0;
arr = [
	[1, 2, 3],
	[4, -5, 6],
];
outer: while (i < arr.length) {
	// console.log(arr[i]);
	while (j < arr[i].length) {
		if (arr[i][j] < 0) break outer;
		console.log(arr[i][j]);
		j++;
	}
	i++;
	j = 0;
}
