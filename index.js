const fs = require('fs');
const inquirer = require('inquirer');
const manager = require('./lib/Manager');
const intern = require('./lib/Intern');
const engineer = require('./lib/Engineer');
const employee = require('./lib/Employee');

//const generatePage = (manager, intern, employee, engineer) => 
//`Manager: ${manager}, Intern: ${intern}, Employee: ${employee}, Engineer: ${engineer}`;



inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name of employee.',
        },
        {
            type: 'checkbox',
            name: 'role',
            message: 'Which employee role do you want to create?',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit']
        },
        {
            type: "input",
            name: "id",
            message: "Please enter id number",
        },
        {
            type: "input",
            name: "email",
            message: "Enter email address",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter office number",
        },
        {
            type: "input",
            name: "school",
            message: "Which school is this intern from?",
        },
        {
            type: "input",
            name: "github",
            message: "Enter github info",
        },
    ])
    .then((answer) => {
        console.log(answer)


        const string = `#Team < !DOCTYPE_html >
            <html lang="en">
                <head></head>
                <body> 
                    ${manager}

                    ${engineer}

                    ${intern}

                    ${employee}
                </body>
            </html>`

        //fs.writeFile(string, (error) => {
            fs.writeFile('./dist/index.html', error => {   
            if (error) throw console.error
            else console.log('success! Checkout index.html!')
        });
    })
/*
console.log(res.employeeRole)
switch (res.employeeRole) {
    case "Intern":
        createIntern();
        break;
    case "Engineer":
        createEngineer();
        break;
    case "Manager":
        createManager();
        break;
    case "Exit":
        createHtml();
        break;
};
*/


/*
promptUser()
    //.then(promptProject)
    //.then(projectAnswers => console.log(projectAnswers));
    .then(answers => console.log(answers));
//.then(portfolioData => {
//console.log(portfolioData);
  //});
*/
