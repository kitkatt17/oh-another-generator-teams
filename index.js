const inquirer = require("inquirer");
const TeamManager = require("./lib/Manager.js");
const SoftwareEngineer = require("./Engineer.js");
const TeamIntern = require("./Intern.js");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/page-template.js");

const teamArray = [];


function runTeamBuilder() {
    function createTeam() {
        inquirer.createPromptModule([
            {
                type: "list",
                message: "What type of team member would you like to add",
                name: "addEmployeePrompt",
                choices: ["Manager", "Software Engineer", "Intern", "No team members are needed anymore."],
            },
        ]).then(function (userInput){
            switch (userInput.addEmployeePrompt) {
                case "Manager":
                    addManager();
                    break;
                case "Software Engineer":
                    addSoftwareEngineer();
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
        inquirer.createPromptModule([
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
            const manager = new TeamManager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam();
        });
    }

    function addSoftwareEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Whats the software engineer's name?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "Whats the software engineer's employee ID number?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Whats the software engineer's email address?",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Whats the engineer's Github username?",
            },
        ]).then(answers => {
            const engineer = new SoftwareEngineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            createTeam();
        });
    }

    function promptIntern() {
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
            const intern = new TeamIntern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            createTeam();
        });
    }

    function buildTeam() {
        console.log("Team created!");
        fs.writeFileSync(outputPath, generateTeamHTML(teamArray), "utf-8");
    }

createTeam();

}




