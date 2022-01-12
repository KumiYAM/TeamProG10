# TeamProG10HWchallenge9
<h1>🏗️ TeamProG10</h1>
<h2>Description</h2>
This application uses node.js / npm 'inquirer' package.
Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. 

<h2>Table of Contents</h2>
<h3>Title<br/>
Description<br/>
Installation<br/>
Usage<br/>
Licens<br/>
Contributing<br/>
Tests<br/>
How to ask Question<br/>
Language</h3>



<h2>Installation</h2>
<h3>1)Please send pull request (or clone) from my github site. <br/>
2)You need to install node.js on your root.<br/> 
3)Install nessesary node "inruirer" packge and dependancies.<br/>
</h3>
<h2>Usage</h2>
<h3>1)After pull (or clone) repository simply run command on your command line.<br/> 
2)You will guided by prompt on command line, so please answer the questions,enter nessesary information and hit enter key. <br/>
3)This prompts will generate your HTML webpage that displays summaries of each person such as name/email/role of team/etc, in CARD style.
</h3>
<h2>License</h2>

<h2>Contributing</h2>
undefined

<h2>Tests</h2>
In Progress

<h2>How to ask questions</h2>
<h3>GitHub User Name : KumiYAM ('https://github.com/KumiYAM')</h3>

<h2>Language</h2>




////////Note to self//////

.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           


///////////////////////////
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
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

-The application will be invoked by using the following command:
node index.js

-Make sure that you remove dist from the .gitignore file so that Git will track this folder and include it when you push up to your application's repository.


-Uses the Inquirer package (Links to an external site.).

-Uses the Jest package (Links to an external site.) for a suite of unit tests.

-The application must have these classes: Employee, Manager, Engineer, and Intern.

