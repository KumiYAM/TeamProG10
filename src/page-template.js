function createManagerCard(manager) {
  return `
  <h2>manager</h2>
<p>name: ${manager.name}</p>
<p>id: ${manager.id}</p>
<p>email: ${manager.email}</p>
<p>officeNumber: ${manager.officeNumber}</p>
  `;
}

function createInternCard(intern) {
  return `
  <h2>intern</h2>
<p>name: ${intern.name}</p>
<p>id: ${intern.id}</p>
<p>email: ${intern.email}</p>
<p>school: ${intern.school}</p>
  `;
}

function createEngineerCard(engineer) {
  return `
  <h2>engineer</h2>
<p>name: ${engineer.name}</p>
<p>id: ${engineer.id}</p>
<p>email: ${engineer.email}</p>
<p>github: ${engineer.school}</p>
  `;
}

function createHTMLDocument(templateData) {
  console.log(templateData);

  return `
     <!DOCTYPE html>
     <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>TeamProG10 Team</title>

       <link rel="stylesheet" href="style.css">
    </head>

    <body>
       <header>
         <div class="container flex-row justify-space-between align-center py-3">
           <nav class="flex-row"> 
            <h1>${templateData.name}</h1>
             <h2>
               <a href="https://github.com/${templateData.github}">Github</a>
             </h2>
           </nav>
         </div>
       </header>
    </body>/   </html>   
      `;
}
function createHTML(employeeArray) {
  console.log(employeeArray);
}
module.exports = createHTML;
