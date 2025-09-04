function Journey(start, end) {
  this.start = start
  this.end = end
}

// Type your code below this line!
const from = process.argv[2]
const to = process.argv[3]
const travel = new Journey(from, to)
// Type your code above this line!

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")
