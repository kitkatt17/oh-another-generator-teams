function buildHTML() {
    console.log("Team created!!");
    fs.writeFileSync(outputPath, generateTeamHTML(teamArray), "utf-8");
}

function runTeamBuilder() {
    createTeam();
}

runTeamBuilder();
