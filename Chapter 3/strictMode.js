// Place "use strict" as the first non-comment line in the script. Can be double or single quotes and can have a semi-colon.
"use strict";

// When calling node, add '--use-strict' (wihtout quotes).
// node --use-strict

/* 
For the record, here are the key features of strict mode:
• Assigning a value to a previously undeclared variable is an error and does
not create a global variable. You must use let, const, or var for all variable
declarations.

• You cannot assign a new value to a read-only global property such as NaN
or undefined. (Sadly, you can still declare local variables that shadow them.)

• Functions can only be declared at the top level of a script or function,
not in a nested block.

• The delete operator cannot be applied to “unqualified identifiers.” For example, delete parseInt is a syntax error. Trying to delete a property that is
not “configurable” (such as delete 'Hello'.length) causes a runtime error.

• You cannot have duplicate function parameters (function average(x, x)).
Of course, you never wanted those, but they are legal in the “sloppy”
(non-strict) mode.

• You cannot use octal literals with a 0 prefix: 010 is a syntax error, not an
octal 10 (which is 8 in decimal). If you want octal, use 0o10.

• The with statement (which is not discussed in this book) is prohibited.
*/
