 module.exports = templateData => {
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
 };