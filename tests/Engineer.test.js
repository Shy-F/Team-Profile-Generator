const { expect } = require("@jest/globals");
const { it } = require("jest-circus");
const { describe } = require("yargs");

const Engineer = requirer('./lib/Engineer.js');

describe('engineer', () => {
    describe('Initialization', () => {
        it('should create an object with a name, id, email, github username and role if provided valid arguments', () => {
            const engineer = new Engineer('Tilvia, til.newman@gmail.com, 890, Til-New');
            expect(engineer.name).toEqual(expect.any(String));
            expect(engineer.email).toEqual(expect.any(String));
            expect(engineer.id).toEqual(expect.any(Number));
            expect(engineer.github).toEqual(expect.any(String));
        });

        it('Get name from constructor', () => {
            const engineer = new Engineer('Tilvia, til.newman@gmail.com, 890, Til-New');
            expect(engineer.getName()).toEqual(expect.any(String));
        });

        it('Get email from constructor', () => {
            const engineer = new Engineer('Tilvia, til.newman@gmail.com, 890, Til-New');
            expect(engineer.getEmail()).toEqual(expect.any(String));
        });

        it('Get id from cnstructor', () => {
            const engineer = new Engineer('Tilvia, til.newman@gmail.com, 890, Til-New');
            expect(engineer.getId()).toEqual(expect.any(Number));
        });

        it('Get github from constructor', () => {
            const engineer = new Engineer('Tilvia, til.newman@gmail.com, 890, Til-New');
            expect(engineer.getGithub()).toEqual(expect.any(String));
        });

        it('Get role from constructor', () => {
            const engineer = new Engineer('Tilvia, til.newman@gmail.com, 890, Til-New');
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});