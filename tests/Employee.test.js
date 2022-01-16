const { expect } = require("@jest/globals");
const { it } = require("jest-circus");
const { describe } = require("yargs");

const Employee = requirer('./lib/Employee.js');

describe('employee', () => {
    describe('Initialization', () => {
        it('should create an object with a name, id, email and role if provided valid arguments', () => {
            const employee = new Employee('Tilvia, til.newman@gmail.com, 890');
            expect(employee.name).toEqual(expect.any(String));
            expect(employee.email).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
        });

        it('Get name from constructor', () => {
            const employee = new Employee('Tilvia, til.newman@gmail.com, 890');
            expect(employee.getName()).toEqual(expect.any(String));
        });

        it('Get email from constructor', () => {
            const employee = new Employee('Tilvia, til.newman@gmail.com, 890');
            expect(employee.getEmail()).toEqual(expect.any(String));
        });

        it('Get id from cnstructor', () => {
            const employee = new Employee('Tilvia, til.newman@gmail.com, 890');
            expect(employee.getId()).toEqual(expect.any(Number));
        });

        it('Get role from constructor', () => {
            const employee = new Employee('Tilvia, til.newman@gmail.com, 890');
            expect(employee.getRole()).toEqual('Employee');
        });
    });
});