const { expect } = require("@jest/globals");
const { it } = require("jest-circus");
const { describe } = require("yargs");

const Manager = requirer('./lib/Manager.js');

describe('manager', () => {
    describe('Initialization', () => {
        it('should create an object with a name, id, email, office Number and role if provided valid arguments', () => {
            const manager = new Manager('Tilvia, til.newman@gmail.com, 890, 7869');
            expect(manager.name).toEqual(expect.any(String));
            expect(manager.email).toEqual(expect.any(String));
            expect(manager.id).toEqual(expect.any(Number));
            expect(manager.officeNumber).toEqual(expect.any(String));
        });

        it('Get name from constructor', () => {
            const manager = new Manager('Tilvia, til.newman@gmail.com, 890, 7869');
            expect(manager.getName()).toEqual(expect.any(String));
        });

        it('Get email from constructor', () => {
            const manager = new Manager('Tilvia, til.newman@gmail.com, 890, 7869');
            expect(manager.getEmail()).toEqual(expect.any(String));
        });

        it('Get id from cnstructor', () => {
            const manager = new Manager('Tilvia, til.newman@gmail.com, 890, 7869');
            expect(manager.getId()).toEqual(expect.any(Number));
        });

        it('Get office Number from constructor', () => {
            const manager = new Manager('Tilvia, til.newman@gmail.com, 890, 7869');
            expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
        });

        it('Get role from constructor', () => {
            const manager = new Manager('Tilvia, til.newman@gmail.com, 890, 7869');
            expect(manager.getRole()).toEqual('Manager');
        });
    });
});