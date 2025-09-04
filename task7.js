// Asegúrate de tener instalado 'prompt-sync': npm install prompt-sync
const prompt = require("prompt-sync")();

/**
 * Constructor para un objeto que describe un coche.
 * @param {string} make - La marca del coche (ej. Nissan).
 * @param {string} model - El modelo del coche (ej. Versa).
 * @param {number} year - El año de fabricación.
 * @param {string} color - El color del coche.
 * @param {number} doors - El número de puertas.
 * @param {number} mileage - El kilometraje en km.
 * @param {string} engineType - El tipo de motor (ej. 'Combustión' o 'Eléctrico').
 */
function Car(make, model, year, color, doors, mileage, engineType) {
  // --- Propiedades ---
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.doors = doors;
  this.mileage = mileage;
  this.engineType = engineType;

  // --- Métodos ---
  /**
   * Muestra toda la información del coche de forma ordenada en la consola.
   */
  this.displayInfo = function() {
    console.log(`\n🚗---------- FICHA TÉCNICA DEL COCHE ----------🚗`);
    console.log(`   Marca: ${this.make}`);
    console.log(`   Modelo: ${this.model}`);
    console.log(`   Año: ${this.year}`);
    console.log(`   Color: ${this.color}`);
    console.log(`   Puertas: ${this.doors}`);
    console.log(`   Kilometraje: ${this.mileage} km`);
    console.log(`   Motor: ${this.engineType}`);
    console.log(`-----------------------------------------------`);
  };
}


// --- Inicio del programa ---

console.log("Por favor, ingresa los datos del coche que quieres registrar:");

// Recopila todos los datos del usuario.
const make = prompt("Marca: ");
const model = prompt("Modelo: ");
const year = parseInt(prompt("Año: ")); // Convertimos a número
const color = prompt("Color: ");
const doors = parseInt(prompt("Número de puertas: ")); // Convertimos a número
const mileage = parseFloat(prompt("Kilometraje (km): ")); // Convertimos a número con decimales
const engineType = prompt("Tipo de motor (Combustión/Eléctrico): ");

// Crea una nueva instancia del objeto Car con los datos recopilados.
const myCar = new Car(make, model, year, color, doors, mileage, engineType);

// Llama al método para mostrar la información del coche creado.
myCar.displayInfo();

