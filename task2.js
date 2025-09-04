function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!

const subject = process.argv[2]; // El sujeto es el primer argumento después del script
const message = process.argv[3]; // El mensaje es el segundo argumento después del script

  const newMail = new Mail(subject, message)
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)
