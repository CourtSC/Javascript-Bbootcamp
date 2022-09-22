// Browser consoles and the Node.js REPL display values when you enter statements. What values are displayed for the following kinds of statements?

// An expression statement
// the value of the expression and "undefined"
console.log(6 * 7);
// 42
// undefined

// A variable declaration
let a = 6;
// undefined

// a block statement
if (true) {
	let x = 1;
	let y = 2;
}
// undefined

// an empty block statement
{
}
// undefined

// A while, do, or for loop whose body is executed at least once
let i = 0;
while (i <= 1) {
	i++;
}
// 2
// the value of i

while (false) {
	console.log("this will never happen.");
}
// undefined

if (true) {
	console.log("This will always happen.");
}
// The output of the statement
// undefined

try {
	console.log("good try!");
} catch {
	console.log("you tried :-(");
}
// The output of the statement
// undefined

try {
	if (x === 0) console.log("zero");
} catch {
	console.log("You forgot the brackets!");
}
// the catch statement
// undefined

// if (x === 0) console.log('zero') else console.log('nonzero')
// missing brackets
if (x === 0) {
	console.log("zero");
} else {
	console.log("nonzero");
}

// Is a || b always the same as a ? a : b, no matter what type a and b are? Why or why not? Can you express a && b in a similar way?
a = false;
let b = true;
a || b 
// Will evalute to true if either value is true, false if both are false, or throw an error if both values are undefined.
a ? a : b
// Will evalute to true if either value is true, false if both are false, or throw an error if a is undefined