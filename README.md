# 🏗️ TeamProG10 - Team Profile Genetrator

## Description

    This application "TeamProG10r" is to build a Node.js command-line application that takes in information about employees
    on a software engineering team. This will generate an HTML webpage at the end, that displays summaries for each person.
    User will be asked simple questions in command line to build a Team Profile, such as "Enter manager's name", etc.
    Without actualy write any HTMl or CSS, user will generate the team profile.
    Node.js dynamically generate by using input that the user enters when prompt.
    Because testing is key to making code maintainable, this applocation includes and already has set up for NPM JUST Testing.

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Installatin](#installation)
- [Usage](#usage)
- [Technology](#technology)
- [Licens](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [How to ask Question](#Questions)
- [Language](#language)

## Installation

Due to on going process of building the application, installation is not avalable to public now.<br/>
The application will be invoked by using the following command on command line:<br/>
`node index.js`-for program excution
`npm run test` -for NPM JUST testing

## Usage

User Story:<br/>
AS A manager
I WANT to generate a webpage that displays my team's basic info<br/>
SO THAT I have quick access to their emails and GitHub profiles<br/>

## Technology

Node.js
npm package : Inquirer, express, jest

## License

![unlicensed](https://img.shields.io/badge/unlicense-%24%7Blicense%7D-green)

## Contributing

Undefined

## Tests

In-progress

## How to ask questions

GitHub User Name : ("https://github.com/KumiYAM")

## Language

<!-- ![JavaScript](https://img.shields.io/badge/ -->

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![HTML](https://img.shields.io/badge/Language-HTML-red)
![CSS](https://img.shields.io/badge/Language-CSS-blue)

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
SELF NOTES

.
├── **tests**/ //jest tests
│ ├── Employee.test.js
│ ├── Engineer.test.js
│ ├── Intern.test.js
│ └── Manager.test.js
├── dist/ // rendered output (HTML) and CSS style sheet  
├── lib/ // classes
├── src/ // template helper code
├── .gitignore // indicates which folders and files Git should ignore
├── index.js // runs the application
└── package.json

///////////////////////////GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
///////////////
