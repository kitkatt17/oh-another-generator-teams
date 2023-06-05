function addManager() {
    const managerQuestions = [
        {
            type: "input",
            name: "managerName",
            message: "What's the manager's name?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What's the manager's employee ID number?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What's the manager's email address?",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What's the manager's office number?",
        },
    ];

    inquirer.prompt(managerQuestions).then(handleManagerAnswers);
}

function handleManagerAnswers(answers) {
    const { managerName, managerId, managerEmail, managerOfficeNumber } = answers;
    const manager = new manager(managerName, managerId, managerEmail, managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
}

runTeamBuilder();