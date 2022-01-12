class Employee {
constructor( name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    };

    getName() {
        let name = '';
        return this.name;
    };

    getId() {
        let id = 0;
        return this.id;
    };

    getEmail() {
        let email = '';
        return this.email;
    };

    getRole() {
        let role = '';
        return this.role;
    }
};

module.exports = Employee