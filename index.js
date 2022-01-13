const inquirer = require("inquirer");
//const { writeFile, copyFile } = require('./dist/index.html');
//const generatePage = require('./src/page-template.js');
//const renderHtml = require('./src/generateMarkdown');
const fs = require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const createHTML = require("./src/page-template");

const employeeArray = [];

/*
 collect manager information
 add object to employee array

 ask to user if they want to add intern add an engineer or finish the process
 
 if selected add an engineer 
 we want to collect engineer information 
 creat engineer object
 add engineer object to our employee array

 if selected add an intern 
 we want to collect intern information 
 creat intern object
 add intern object to our employee array

 If selected finished process
 we want to create HTML page
 exit application


*/
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is manager's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is manager's ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is manager's email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is manager's office number?",
        name: "officeNumber"
      }
      //     {
      //       type: "input",
      //       message: "",
      //       name: ""
      //     }
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      employeeArray.push(manager);
      console.log(employeeArray);
      mainMenu();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is intern's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is intern's ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is intern's email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is intern's school?",
        name: "school"
      }
      //     {
      //       type: "input",
      //       message: "",
      //       name: ""
      //     }
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      employeeArray.push(intern);
      console.log(employeeArray);
      mainMenu();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is engineer's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is engineer's ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is engineer's email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is engineer's github?",
        name: "github"
      }
      //     {
      //       type: "input",
      //       message: "",
      //       name: ""
      //     }
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      employeeArray.push(engineer);
      console.log(employeeArray);
      mainMenu();
    });
}

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "what to do next?",
        choices: ["Add Engineer", "Add Intern", "Exit"]
      }
    ])
    .then((answer) => {
      switch (answer.choice) {
        case "Add Intern":
          addIntern();
          break;
        case "Add Engineer":
          addEngineer();
          break;
        case "Exit":
          createHTML(employeeArray);
          break;
      }
    });
}
addManager();
// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "Enter name of employee.(Required)",
//       name: "name",
//       validate: (nameInput) => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log("Please enter name of employee!");
//           return false;
//         }
//       }
//     },
//     {
//       type: "list",
//       name: "role",
//       message:
//         "Which employee role do you want to create? Check all that apply",
//       choices: ["Manager", "Engineer", "Intern", "Exit"]
//     },
//     {
//       type: "input",
//       name: "id",
//       message: "Please enter id number"
//     },
//     {
//       type: "input",
//       name: "email",
//       message: "Enter email address"
//     },
//     {
//       type: "input",
//       name: "officeNumber",
//       message: "Enter office number"
//     },
//     {
//       type: "input",
//       name: "school",
//       message: "Which school is this intern from?"
//     },
//     {
//       type: "input",
//       name: "github",
//       message: "Enter github info"
//     }
//   ])

//   .then((answer) => {
//     console.log(answer);
//   });
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
