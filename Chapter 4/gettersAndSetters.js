class person {
	constructor(last, first) {
		this.last = last;
		this.first = first;
	}
	// A getter is a method with no parameters the is declared with the keyword "get"
	get fullName() {
		return `${this.last}, ${this.first}`;
	}
	// You can also provide a setter, a method with one parameter
	set fullName(value) {
		const parts = value.split(/,\s*/);
		this.last = parts[0];
		this.first = parts[1];
	}
}

// You call the getter without parentheses as if you accessed a property value
const harry = new person("Smith", "Harry");
const harrysName = harry.fullName; // 'Smith, Harry'
