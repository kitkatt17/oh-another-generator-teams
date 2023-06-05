function runTeamBuilder() {
    function createTeam() {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What type of team member would you like to add",
                    name: "addEmployeePrompt",
                    choices: [
                        "Manager",
                        "Engineer",
                        "Intern",
                        "No team members are needed anymore.",
                    ],
                },
            ])
            .then(handleUserInput);
    }

    function handleUserInput(userInput) {
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
    }

    createTeam();
}

runTeamBuilder();