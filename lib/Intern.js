class Intern {
    constructor (name, email, id, school) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.school = school;
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
    getSchool() {
        return this.school;
        console.log(`school gotten successfully`);

    }
    getRole() {
        return 'Intern';
        console.log(`role gotten successfully`);
    }
}

module.exports = Intern;