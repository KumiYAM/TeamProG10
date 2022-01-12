
const Employee = require("../lib/Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        let school = '';
        school = this.school;
        return school;
    }
    
    getRole() {
        return "intern"
    }
}

module.exports = Intern;
