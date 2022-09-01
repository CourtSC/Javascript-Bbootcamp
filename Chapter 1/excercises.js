// What happens when you add 0 to the values NaN, Infinity, false, true, null,
// and undefined? What happens when you concatenate the empty string with
// NaN, Infinity, false, true, null, and undefined? Guess first and then try it out.

0 + NaN;
// NaN
0 + Infinity;
// Infinity
0 + false;
// 0
0 + true;
// 1
0 + null;
// 0
0 + undefined;
// NaN

// What are [] + [], {} + [], [] + {}, {} + {}, [] - {}? Compare the results of
// evaluating the expressions at the command line and assigning them to a
// variable. Explain your findings.
// [] + []
// ''
// As variable ''
// {} + []
// '[object Object]'
// As variable '[object Object]'

// Suppose angle is some angle in degrees that, after adding or subtracting
// other angles, has assumed an arbitrary value. You want to normalize it
// so that it is between 0 (inclusive) and 360 (exclusive). How do you do
// that with the % operator?
let angle = 170; // Some angle in degrees.
let otherAngle = 240; // Some other angle in degrees.
let newAngle = (angle + otherAngle) % 360; // newAngle will be the remainder of the two angles divided by 360, normalizing the angle between 0 and 360. If angle + otherAngle is less than 360, newAngle will be that angle.

// Give three ways of producing an array with a “hole” in the index sequence.
numbers = [, 2, , , 5];
numbers[12] = 11;
numbers.lucky = true;

// What happens when an array of arrays is converted to a string?
arrOfArrs = [
	[1, 2, 3],
	[4, 5, 6],
];
"" + arrOfArrs;
// '1,2,3,4,5,6'

// Make a couple of objects representing people and store them in variables
// harry and sally. To each person, add a property friends that contains an
// array with their best friends. Suppose harry is a friend of sally and sally
// is a friend of harry. What happens when you log each object? What
// happens when you call JSON.stringify?
harry = {
	name: "Harry Smith",
	friends: [sally],
};
sally = {
	name: "Sally Fields",
	friends: [harry],
};

console.log(`harry=${harry}`);
// harry=[object Object]

JSON.stringify(harry);
// Uncaught TypeError: Converting circular structure to JSON
//     --> starting at object with constructor 'Object'
//     |     property 'friends' -> object with constructor 'Array'
//     |     index 0 -> object with constructor 'Object'
//     |     property 'friends' -> object with constructor 'Array'
//     --- index 0 closes the circle
//     at JSON.stringify (<anonymous>)
