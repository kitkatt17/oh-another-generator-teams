function addIntern() {
    const internQuestions = [
        {
            type: "input",
            name: "internName",
            message: "What's the intern's name?",
        },
        {
            type: "input",
            name: "internId",
            message: "What's the intern's employee ID number?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What's the intern's email address?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend?",
        },
    ];

    inquirer.prompt(internQuestions).then(handleInternAnswers);
}

function handleInternAnswers(answers) {
    const { internName, internId, internEmail, internSchool } = answers;
    const intern = new Intern(internName, internId, internEmail, internSchool);
    teamArray.push(intern);
    createTeam();
}

runTeamBuilder();