function addEngineer() {
    const engineerQuestions = [
        {
            type: "input",
            name: "engineerName",
            message: "What's the engineer's name?",
        },
        {
            type: "input",
            name: "engineerId",
            message: "What's the engineer's employee ID number?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What's the engineer's email address?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What's the engineer's Github username?",
        },
    ];

    inquirer.prompt(engineerQuestions).then(handleEngineerAnswers);
}

function handleEngineerAnswers(answers) {
    const { engineerName, engineerId, engineerEmail, engineerGithub } = answers;
    const engineer = new engineer(engineerName, engineerId, engineerEmail, engineerGithub);
    teamArray.push(engineer);
    createTeam();
}

runTeamBuilder();