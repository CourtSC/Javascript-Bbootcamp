// To convert a string to a number, use parseFloat or parseInt.
const notQuitePi = parseFloat("3.14");
const evenLessPi = parseInt("3");

// The toString method converts a number back to a string.
const notQuitePiString = notQuitePi.toString();
const evenLessPiString = evenLessPi.toString();

/* CAUTION: What happens when you use a fractional number when an
integer is expected? It depends on the situation. Suppose you extract
a substring of a string. Then fractional positions are truncated to the
next smaller integer:

'Hello'.substring(0, 2.5) // The string 'He'

But when you provide a fractional index, the result is undefined:

'Hello'[2.5] // undefined

It isn’t worth figuring out when a fractional number happens to work as
an integer. If you are in such a situation, make your intent explicit by
calling Math.trunc(x) to discard the fractional part, or Math.round(x) to round
to the nearest integer. */
