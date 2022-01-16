class Manager {
    constructor (name, email, id, officeNumber) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNumber = officeNumber;
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
    getOfficeNumber() {
        return this.officeNumber;
        console.log(`office number gotten successfully`);
    }
    getRole() {
        return 'Manager';
        console.log(`role gotten successfully`);
    }
}

module.exports = Manager;