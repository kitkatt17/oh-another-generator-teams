// Creating the team
const generateTeamHTML = team => {

    // Creating a manager html
    const generateManagerHTML = manager => {
        return `
    <div class = "card employee-card">
        <div class = "card-header bg-primary text-white">
            <h2 class = "card-title">${manager.getName()}</h2>
            <h3 class = "card-title"><i class = "fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class = "card-body">
            <ul class = "list-group">
                <li class = "list-group-item">ID: ${manager.getId()}</li>
                <li class = "list-group-item">Email: <a href = "malito:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class = "list-group-item">Office Number: ${manager.getOfficeLocation()}</li>
            </ul>
        </div>
    </div>
        `;
    };

// Creating the html for the software engineers
const generateEngineerHTML = engineer => {
        return `
    <div class = "card employee-card">
    <div class = "card-header bg-primary text-white">
        <h2 class = "card-title">${engineer.getName()}</h2>
        <h3 class = "card-title"><i class = "fas fa-mug-hot mr-2"></i>${engineer.getEmployeeRole()}</h3>
    </div>
    <div class = "card-body">
        <ul class = "list-group">
            <li class = "list-group-item">ID: ${engineer.getEmployeeId()}</li>
            <li class = "list-group-item">Email: <a href = "malito:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class = "list-group-item">GitHub: <a href = "https://github.com/${engineer.getGithub()}" target = "_blank" rel = "noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
    </div>
        `;
    };

const generateInternHTML = intern => {
        return `
    <div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchoolName()}</li>
        </ul>
    </div>
    </div>
        `;
    };

    const generateTeamHTML = team => {
        const generateManagerHTML = team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManagerCard(manager));

        const generateEngineerHTML = team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => generateEngineerCard(engineer))
            .join("");

        const generateInternHTML = team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => generateInternCard(intern))
            .join("");

        return [generateManagerHTML, generateEngineerHTML, generateInternHTML].join("");
    };

// Exporting function to generate an entire page
module.exports = team => {
        return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                    ${generateTeamHTML(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
        `;
    };
};