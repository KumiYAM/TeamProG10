
const inquirer = require('inquirer');
//const { writeFile, copyFile } = require('./dist/index.html');
//const generatePage = require('./src/page-template.js');
//const renderHtml = require('./src/generateMarkdown');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');

const employeeArray = [];

inquirer
.prompt([     
    {
        type: 'input',
        message: 'Enter name of employee.(Required)',
        name: 'name',
         validate: nameInput => {
             if (nameInput) {
               return true;
             } else {
               console.log('Please enter name of employee!');
              return false;
             }
            }
    },
    {
            type: 'list',
            name: 'role',
            message: 'Which employee role do you want to create? Check all that apply',
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
    });
    //.then(portfolioData => {
       //const pageHTML = generatePage(portfolioData);
    
       // fs.writeFile('./index.html', pageHTML, error => {   
        // if (error) throw new Error(err);

           // console.log('success! Checkout index.html!')
        //});
    //});
//},
//]);

// console.log(res.employeeRole)
// switch (res.employeeRole) {
//     case "Intern":
//         createIntern();
//         break;
//     case "Engineer":
//         createEngineer();
//         break;
//     case "Manager":
//         createManager();
//         break;
//     case "Exit":
//         createHtml();
//         break;
// };




//function init() {
// promptUser()
//     .then(questions => {
//         return generateMarkdown(employeeArray);
//     })
//     .then(writePage => {
//             return writeFile(writePage);
//     })
//     .then(answer => {

//     console.log(answer);
//     return copyFile();
// })
// }
// init();

