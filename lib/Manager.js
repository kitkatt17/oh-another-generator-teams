const Employee = require("./employee");

class TeamManager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeLocation() {
        return this.officeNumber;
    }

    getEmployeeRole() {
        return "Team Manager";
    }
}

module.exports = TeamManager;