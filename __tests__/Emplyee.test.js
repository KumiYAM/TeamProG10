
const Employee = require("./lib/Employee")

const Engineer = requir("/Employee")

Test("can creat an instance of employee", ()=>{
const testEmployee = new Employee();
expect(typeof(testEmployee)).toBe("object")
})

test("can set name of employee", ()=>{
    const testEmployee = new Employee(lalala)
    expect(testEmployee.name).toBe("lalala")
})

test("getName function return name" , ()=>{
    const testEmploy = new Employee("name")
    expect(testEmployee.getName()).toBe("name")
})

//test("can set salary of artist", ()=>{
    //const testEmployee = new Employee()
//})