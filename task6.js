function ShoppingList() {
  this.items = []

  this.addItem = function(name, quantity) {
    this.items.push({ name: name, quantity: quantity })
  }
}

// Type your code below this line!
const numItems = parseInt(process.argv[2])

const myList = new ShoppingList()
for (let i = 0; i < numItems; i++) {
  const name = process.argv[3 + (i * 2)]
  const quantity = process.argv[4 + (i * 2)]
  myList.addItem(name, quantity)
}
// Type your code above this line!

console.log(myList.items)
