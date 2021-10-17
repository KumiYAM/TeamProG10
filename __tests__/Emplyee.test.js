
const Employee = require("../lib/Employee")



test("can create an instance of  employee" , () => {
    const employee = new Employee({name: 'Kiko', id: '1234', email: 'kiko@email', role: 'engineer'});
    expect(employee.getName()).toBe('Kiko');
});
test("can set id of employee" , () => {
    const employee = new Employee('1234')
    expect(employee.getId()).toBE('1234')
})

test("can set email of employee", () => {
    const employee = new Employee('koki@email')
    expect(employee.getEmail()).toBe('kiko@email')
})


test("can creat an role of employee", () => {
const employee = new Employee('aname');
expect(typeof(employee)).getRole.toBe('aname')
})




