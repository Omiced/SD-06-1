function FriendsList() {
  this.names = []
}
// Type your code below this line!
const numFriends = parseInt(process.argv[2])
const friends = new FriendsList()
for (let i = 0; i < numFriends; i++) {
  friends.names.push(process.argv[3 + i])
}

// Type your code above this line!

console.log(friends.names)
