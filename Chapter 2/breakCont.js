// break
let arr = [1, 2, 3, -4, 5];
let i = 0;
while (i < arr.length) {
	if (arr[i] < 0) break;
	console.log(arr[i]);
	i++;
} // break sends control here

// loop termination via boolean
i = 0;
let found = false;
while (!found && arr.length) {
	// loop ends when found is true
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
	while (j < arr[i].length) {
		if (arr[i][j] < 0) break outer;
		console.log(arr[i][j]);
		j++;
	}
	i++;
	j = 0;
} // break outer sends control here

// continue - transfers control to the end of the innermost loop.
let count = 0;
let sum = 0;
arr = [1, 2, 0, 3];
for (let i = 0; i < arr.length; i++) {
	// continue sends control here
	console.log(`arr[i]: ${arr[i]}`);
	if (arr[i] <= 0) continue;
	count++;
	console.log(`count: ${count}`);
	sum += arr[i];
	console.log(`sum: ${sum}`);
}
let avg = count === 0 ? 0 : sum / count;
console.log(`avg: ${avg}`);
