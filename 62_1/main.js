// number, string, boolean, null, undefined, Nan
// object , array, function

const a = 4
const b = a

const user1 = {
    name: "Bob",
    age: 23,
    isStudent: true
}

const user2 = user1
user2.name = "Ann"
console.log(user1)

const copyUser = {} // new Object()
copyUser.name = user1.name
copyUser.age = user1.age
copyUser.isStudent = user1.isStudent

console.log(copyUser)
console.log(copyUser === user2)