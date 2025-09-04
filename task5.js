
// Para usar 'prompt-sync', primero debes instalarlo con el comando: npm install prompt-sync
const prompt = require("prompt-sync")();

/**
 * Constructor para un objeto de lista de amigos.
 */
function FriendsList() {
  // Inicializa la propiedad 'friends' como un arreglo vacío para guardar los nombres.
  this.friends = [];

  /**
   * Este método le pregunta al usuario cuántos amigos quiere agregar
   * y luego le pide cada nombre para añadirlo a la lista.
   */
  this.fillList = function() {
    // 1. Le pregunta al usuario cuántos amigos va a ingresar.
    const friendCount = parseInt(prompt("¿Cuántos amigos quieres agregar? "));

    console.log(`Excelente. Ahora, por favor, ingresa los ${friendCount} nombres.`);

    // 2. Se repite esa cantidad de veces para pedir cada nombre.
    for (let i = 0; i < friendCount; i++) {
      const name = prompt(`Nombre del amigo #${i + 1}: `);
      this.friends.push(name); // Agrega el nombre al arreglo.
    }
  };
}

// --- Inicio del programa ---

// Se crea una nueva instancia del objeto FriendsList.
const myFriends = new FriendsList();

// Se llama al método para que el usuario llene la lista.
myFriends.fillList();

// 3. Se imprime el arreglo final directamente en la consola.
console.log("\n✅ Tu lista de amigos ha sido creada:");
console.log(myFriends.friends);
