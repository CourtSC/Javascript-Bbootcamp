// An object literal can have a trailing comma. This makes it easy to add other properties as the code evolves.

let harry = {
	name: "Harry Smith",
	age: 42,
};

// When declaring an object literal, property values are stored in variables whose names are equal to the property names.
let age = 43;
harry = {
	name: "Harry Smith",
	age, // This is a shortcut for "age: age".
};

// Use brackets for the computed property names in object literals.
let field = "Age";
harry = {
	name: "Harry Smith",
	[field.toLowerCase()]: 42,
};

// A property name is alwasy a string. If the name doesn't follow the rules of an identifier, quote it in an object literal.
harry = {
	name: "Harry Smith",
	"favorite beer": "IPA",
};
// To access such a property, you cannot use the dot notation. Use brackets instead.
harry["favorite beer"] = "Lager";
