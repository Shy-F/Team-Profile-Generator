class Employee {
    constructor (name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    getName() {
        return this.name;
        console.log(`name gotten successfully`);
    }
    getEmail() {
        return this.email;
        console.log(`email gotten successfully`);
    }
    getId() {
        return this.id;
        console.log(`Id gotten successfully`);
    }
    getRole() {
        return 'Employee';
        console.log(`role gotten successfully`);
    }
}

module.exports = Employee;