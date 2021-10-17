const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const Employee = require('./lib/Employee.js');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'list',
            name: 'employeeRole',
            message: 'What is employee role do you want to create?',
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Exit",
            ]
        }

    ])
    .then((res) => {
        console.log(res.employeeRole)
        switch (res.employeeRole) {
            case "Intern":
                createIntern()
                break;
            case "Engineer":
                createEngineer()
                break;
            case "Manager":
                createManager()
                break;
            case "Exit":
                createHtml()
                break;
        };
    });

inruire
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Name",
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
            name: "scholl",
            message: "which school is this intern from?",
        },
        {
            type: "input",
            name: "github",
            message: "Enter github info",
        },


    ])
    .then((res) => {
        console.log(res)

       
            const managerCard = (managerArr)=> {
                return `<p>${manager.getName()}</p>`
            }
        
      const string = `#Team`<!DOCTYPE_html>
     <html lang="en">
        <head></head>
        <body> ${res.manager}

            ${res.engineer}

            ${res.intern}

            ${res.employee}

        </body>
        </html>
        fs.writeFile(string, (error) => {
            if (error) throw console.error
            else console.log('success')
        });
    })


