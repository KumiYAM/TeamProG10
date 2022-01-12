//const { test, expect } = require('@jest/globals')
const Employee = require("../lib/Employee")

test("can create an instance of employee", () => {
    const employee = new Employee('Jane', '1', 'email', 'employee');

    expect(employee.name).toBe('Jane');
    expect(employee.id).toEqual('1');
    expect(employee.email).toEqual('email');
    //expect(employee.role).toBe('employee')
});

test("can set employee name", () => {
    const employee = new Employee('Jane', '1', 'email', 'employee');

    expect(employee.getName()).toBe('Jane');
});


test("can set id of employee", () => {
    const employee = new Employee('Jane', '1', 'email', 'employee');

    expect(employee.getId()).toEqual('1');
});

test("can set email of employee", () => {
    const employee = new Employee('Jane', '1', 'email', 'employee');
    expect(employee.getEmail()).toBe('email')
});

//test("can create an role of employee", () => {
//const employee = new Employee('Jane', '1', 'this.email', 'employee');
//expect(employee.setRole('manager')).toBe(employee.role);
//})




