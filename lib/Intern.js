const Employee = require("./employee");

class TeamIntern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchoolName() {
        return this.school;
    }

    getEmployeeRole() {
        return "Intern";
    }
}

module.exports = TeamIntern;
