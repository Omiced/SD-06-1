
// Asegúrate de tener 'prompt-sync' instalado: npm install prompt-sync
const prompt = require("prompt-sync")();

/**
 * Constructor para un objeto de lista de compras.
 * @param {string} storeName - El nombre de la tienda para la que es la lista.
 */
function ShoppingList(storeName) {
  this.store = storeName;
  this.date = new Date().toLocaleDateString(); // Guarda la fecha de creación.
  
  // La lista se almacena como un arreglo de objetos.
  // Cada objeto tendrá una propiedad 'name' y 'quantity'.
  this.items = [];

  /**
   * Método para llenar la lista pidiendo datos al usuario.
   * La lista puede ser tan larga como el usuario quiera.
   */
  this.fill = function() {
    console.log(`\n📝 Ingresa los artículos para tu visita a "${this.store}".`);
    console.log("(Escribe 'fin' en el nombre del artículo para terminar)");

    // Un bucle infinito que se detiene cuando el usuario lo indica.
    while (true) {
      const itemName = prompt("   > Artículo: ");

      // Si el usuario escribe 'fin', salimos del bucle.
      if (itemName.toLowerCase() === 'fin') {
        break;
      }

      // Preguntamos por la cantidad, que puede ser texto (ej. "1 docena").
      const itemQuantity = prompt(`     Cantidad de '${itemName}': `);

      // Creamos un objeto para el artículo y lo agregamos al arreglo.
      this.items.push({
        name: itemName,
        quantity: itemQuantity
      });
    }
  };

  /**
   * Método para imprimir la lista de compras de forma ordenada.
   */
  this.print = function() {
    console.log(`\n🛒------------ LISTA DE COMPRAS ------------🛒`);
    console.log(`   Tienda: ${this.store}`);
    console.log(`   Fecha: ${this.date}`);
    console.log(`-------------------------------------------`);
    
    if (this.items.length === 0) {
      console.log("   La lista está vacía.");
    } else {
      // Itera sobre cada objeto en el arreglo 'items'.
      this.items.forEach(item => {
        console.log(`   - ${item.name} (${item.quantity})`);
      });
    }

    console.log(`-------------------------------------------\n`);
  };
}


// --- Inicio del programa ---
const store = prompt("¿Para qué tienda es tu lista de compras? ");
const myList = new ShoppingList(store);

myList.fill(); // El usuario llena la lista.
myList.print(); // Se imprime la lista final.
