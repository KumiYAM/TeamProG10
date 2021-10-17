
const engineer = require("../lib/Engineer")


test("can creat an instance of engineer", ()=>{
const testEngineer= new engineer();
expect(typeof(testEngineer)).toBe("object")
})

test("can set name of engineer", ()=>{
    const testEmployee = new engineer(momo)
    expect(testEngineer.name).toBe("momo")
})

test("getName function return name" , ()=>{
    const testEngineer = new engineer("name")
    expect(testEngineer.getName()).toBe("name")
})

test("can set id of engineer", ()=>{
    const testEngineer = new engineer()
})