const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeamHTML = require("./src/page-template.js");

const teamArray = [];


function runTeamBuilder() {
    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                message: "What type of team member would you like to add",
                name: "addEmployeePrompt",
                choices: ["Manager", "Engineer", "Intern", "No team members are needed anymore."],
            },
        ]).then(function (userInput){
            switch (userInput.addEmployeePrompt) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildHTML();
            }
        });
    }

    // OOP Functions

    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Whats the manager's name?",
            },
            {
                type: "input",
                name: "managerId",
                message: "Whats the manager's employee ID number?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Whats the manager's email address?",
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Whats the manager's office number?",
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam();
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Whats the engineer's name?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "Whats the engineer's employee ID number?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Whats the engineer's email address?",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Whats the engineer's Github username?",
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Whats the intern's name?",
            },
            {
                type: "input",
                name: "internId",
                message: "Whats the intern's employee ID number?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "Whats the intern's email address?",
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school does the intern attend?",
            },
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            createTeam();
        });
    }

    function buildHTML() {
        console.log("Team created!!");
        fs.writeFileSync(outputPath, generateTeamHTML(teamArray), "utf-8");
    }

createTeam();

}

runTeamBuilder();