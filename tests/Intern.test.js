const { expect } = require("@jest/globals");
const { it } = require("jest-circus");
const { describe } = require("yargs");

const Intern = requirer('./lib/Intern.js');

describe('intern', () => {
    describe('Initialization', () => {
        it('should create an object with a name, id, email, school and role if provided valid arguments', () => {
            const intern = new Intern('Tilvia, til.newman@gmail.com, 890, Xavier');
            expect(intern.name).toEqual(expect.any(String));
            expect(intern.email).toEqual(expect.any(String));
            expect(intern.id).toEqual(expect.any(Number));
            expect(intern.school).toEqual(expect.any(String));
        });

        it('Get name from constructor', () => {
            const intern = new Intern('Tilvia, til.newman@gmail.com, 890, Xavier');
            expect(intern.getName()).toEqual(expect.any(String));
        });

        it('Get email from constructor', () => {
            const intern = new Intern('Tilvia, til.newman@gmail.com, 890, Xavier');
            expect(intern.getEmail()).toEqual(expect.any(String));
        });

        it('Get id from cnstructor', () => {
            const intern = new Intern('Tilvia, til.newman@gmail.com, 890, Xavier');
            expect(intern.getId()).toEqual(expect.any(Number));
        });

        it('Get school from constructor', () => {
            const intern = new Intern('Tilvia, til.newman@gmail.com, 890, Xavier');
            expect(intern.getSchool()).toEqual(expect.any(String));
        });

        it('Get role from constructor', () => {
            const intern = new Intern('Tilvia, til.newman@gmail.com, 890, Xavier');
            expect(intern.getRole()).toEqual('Intern');
        });
    });
});