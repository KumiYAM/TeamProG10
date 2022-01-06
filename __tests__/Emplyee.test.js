
const Employee = require("../lib/Employee")

test("can create an instance of  employee" , () => {
    const employee = new Employee({name: 'kiko', id: '1234', email: 'kiko@email', role: 'engineer'});
    expect(employee.getName()).toBe("object");
});

test("can set id of employee" , () => {
    const employee = new Employee('1234');
    expect(employee.getId()).toBe(expect.any(Number))
});

test("can set email of employee", () => {
    const employee = new Employee('koki@email')
    expect(employee.getEmail()).toBe('kiko@email')
});

test("can create an role of employee", () => {
const employee = new Employee('name');
expect(typeof(employee)).getRole.toBe('name')
})




