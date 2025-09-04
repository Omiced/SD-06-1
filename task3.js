// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
  }
  
// 1. Extiende el constructor usando 'prototype' para añadir el método printMail().
//    'this' se refiere a la instancia específica del objeto que llama al método.
Mail.prototype.printMail = function() {
  console.log(`${this.subject}: ${this.message}`);
};

// 2. Captura el asunto y el mensaje desde los argumentos de la línea de comandos.
const subject = process.argv[2];
const message = process.argv[3];

// 3. Crea una nueva instancia de Mail con los argumentos.
const newMail = new Mail(subject, message);


// 4. Llama al método para imprimir el resultado.
newMail.printMail();