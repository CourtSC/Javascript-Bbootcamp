"use strict";

let numbers = [1, 7, 2, 9];
let result = Math.max(numbers); // Yields NaN

// Use the spread operator before the array arg.
result = Math.max(...numbers); // Yields 9
