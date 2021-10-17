
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const inquirer = require('inquirer');
const fs = require('fs');



//const employee = [];
let engineerArr = []
let internArr = []
let managerArr = []


function employeecreateChoice() {
    inquire.prompt([
        {
            type: 'list',
            name: 'employeeRole',
            message: 'What is employee role do you want to create?',
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Exit"
            ]
        }

    ])
        .then(res => {
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
    function createManager() {
        inruire
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Name"
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please enter id number"
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter email address"
                },
                {
                    type: "input",
                    name: "office-number",
                    message: "Enter office number"
                }
            ])
            .then(res => {
                console.log(res.id)
                if (isNaN(res.id)) {
                    console.log("You entered was not number")
                    console.log("please try again")
                    createManager()
                };

                console.log(res.office_number)
                if (isNaN(res.office - number)) {
                    console.log("You entered was not number")
                    console.log("please try again")
                    createManager()
                }
            });

    function createIntern() {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "name",
                                message: "Name"
                            },
                            {
                                type: "input",
                                name: "id",
                                message: "Please enter id number"
                            },
                            {
                                type: "input",
                                name: "scholl",
                                message: "which school is this intern from?"
                            },
                            {
                                type: "input",
                                name: "email",
                                message: "Enter email address"
                            }

                        ])
                        .then(res => {
                            console.log(res.id)
                            if (isNaN(res.id)) {
                                console.log("You entered was not number")
                                console.log("please try again")
                                createIntern()
                            }

                            const engineer = new Engineer(res.name, res.id, res.email)
                            engineerArr.push(engineer)
                            createChoice()
                        })
                }
    function createHtml() {
                    function enineerHtml() {
                        let engineerCard = engineerArr.map(engineer => {
                            return `<p>${engineer.getName()}</p>`
                        })
                        return engineerCard.join("")
                    }
                }
    function createHtml() {
                    function internHtml() {
                        let internCard = internArr.map(intern => {
                            return `<p>${intern.getName()}</p>`
                        })
                        return internCard.join("")
                    };
                    function createHtml() {
                        function managerHtml() {
                            let managerCard = managerArr.map(manager => {
                                return `<p>${manager.getName()}</p>`
                            })
                            return managerCard.join("")
                        };

                        console.log(`<!DOCTYPE html>
        <hhtml lang="en">
        <head></head>
        <body>${engineerHtml()}</body>
        </html>`)
        s        

