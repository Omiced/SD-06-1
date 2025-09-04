function Car(brand, model, year, color, doors, mileage, type) {
  this.brand = brand
  this.model = model
  this.year = year
  this.color = color
  this.doors = doors
  this.mileage = mileage
  this.type = type

  this.printCar = function() {
    console.log(
      this.year + " " + this.brand + " " + this.model + 
      " | Color: " + this.color +
      " | Puertas: " + this.doors +
      " | Kilometraje: " + this.mileage +
      " | Tipo: " + this.type
    )
  }
}
// Type your code below this line!
const myCar = new Car(
  process.argv[2],
  process.argv[3], 
  process.argv[4], 
  process.argv[5], 
  process.argv[6],  
  process.argv[7],  
  process.argv[8]   
)
// Type your code above this line!

myCar.printCar()
