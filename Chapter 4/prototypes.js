/* 
Suppose you have many employee objects similar to the one in the preceding section. Then you need to make a raiseSalary property for each of them. You can write a factory function to automate that task:
*/

/* 
const createEmployee = (name, salary) => {
    return {
        name: name,
        salary: salary,
        raiseSalary(percent) {
            this.salary *= 1 + percent / 100
        }
    }
}
 */

/* 
Or you can use a prototype.
*/

const employeePrototype = {
    raiseSalary(percent) {
        this.salary *= 1 + percent / 100
    }
}

function createEmployee(name, salary) {
    const result = { name, salary }
    Object.setPrototypeOf(result, employeePrototype)
    return result
}