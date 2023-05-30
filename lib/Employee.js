class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getFullName() {
        return this.name;
    }

    getEmployeeId() {
        return this.id;
    }

    getEmailAddress() {
        return this.email;
    }

    getEmployeeRole() {
        return "Employee";
    }
}

module.exports = Employee;