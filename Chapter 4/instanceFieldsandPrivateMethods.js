// You can dynamically set an object property in the constructor or any method by assigning to this.propertyName.
class bankAccount {
	constructor() {
		this.balance = 0;
	}
	deposit(amount) {
		this.balance += amount;
	}
	// ...
}

// A field is private (that is, inaccessible outside the methods of the class) when its name starts with #
