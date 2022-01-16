class Engineer {
    constructor (name, email, id, github) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.github = github;
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
    getGithub() {
        return this.github;
        console.log(`Github gotten successfully`);
    }
    getRole() {
        return 'Engineer';
        console.log(`role gotten successfully`);
    }
}

module.exports = Engineer;