function createManagerCard(manager) {
  return `
  <h2 class="head-manager">Manager</h2>
<p>name: ${manager.name}</p>
<p>id: ${manager.id}</p>
<p>email: ${manager.email}</p>
<p>officeNumber: ${manager.officeNumber}</p>
  `;
}

function createInternCard(intern) {
  return `
  <h2 class="head-intern">Intern</h2>
<p>name: ${intern.name}</p>
<p>id: ${intern.id}</p>
<p>email: ${intern.email}</p>
<p>school: ${intern.school}</p>
  `;
}

function createEngineerCard(engineer) {
  return `
  <h2  class="head-engineer">Engineer</h2>
<p>name: ${engineer.name}</p>
<p>id: ${engineer.id}</p>
<p>email: ${engineer.email}</p>
<p>github: ${engineer.school}</p>
  `;
}

function createHTMLtext(cardArray) {
  return `
     <!DOCTYPE html>
     <html lang="en">
      <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>TeamProG10 Team</title>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
       <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
       <link rel="stylesheet" href="style.css">
      </head>

    <body>
       <header>
         <div class="container flex-row justify-space-between align-center py-3">
           <nav class="flex-row"> 
            <h1>Team Page</h1>
           </nav>
         </div>
       </header>
       ${cardArray.join("")}
    </body>   
    </html>   
      `;
}
function createHTML(employeeArray) {
  //console.log(employeeArray);
  let cardArray = [];

  //loop through employee array to access each employee object
  for (let index = 0; index < employeeArray.length; index++) {
    const employee = employeeArray[index];

    // getRole method
    const role = employee.getRole();

    let employeeCard;
    // build card for the correct role

    if (role === "Manager") {
      employeeCard = createManagerCard(employee);
    }
    if (role === "Engineer") {
      employeeCard = createEngineerCard(employee);
    }
    if (role === "Intern") {
      employeeCard = createInternCard(employee);
    }
    // add card to card array
    cardArray.push(employeeCard);
  }
  // build index file with card array
  const HTMLtext = createHTMLtext(cardArray);
  return HTMLtext;
}
module.exports = createHTML;
