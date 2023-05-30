const Employee = require("./employee");

class SoftwareEngineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithubUsername() {
        return this.github;
    }

    getEmployeeRole() {
        return "Software Engineer";
    }
}

module.exports = SoftwareEngineer;