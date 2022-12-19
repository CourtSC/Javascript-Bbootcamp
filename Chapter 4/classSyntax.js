class employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	raiseSalary(percent) {
		this.salary *= 1 + percent / 100;
	}
}

// Construct an object by calling this constructor function with the new operator
const harry = new employee("Harry Smith", 90000);
