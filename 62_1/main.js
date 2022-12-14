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

// const copyUser = {} // new Object()
// copyUser.name = user1.name
// copyUser.age = user1.age
// copyUser.isStudent = user1.isStudent

const copyUser = {...user1}

console.log(copyUser)
console.log(copyUser === user2) // false

const copyUser1 = {...user1, isStudent: false}// изменения существующего св-ва
const copyUser2 = {...user1, isMarried: false}// добавление св-ва

const address = {
    country: "Thailand",
    city: "Bangkok"
}
const copyUser3 = {...user1, ...address}
console.log(copyUser3)
// глубокое копирование
const student = {
    name: "Bob",
    age: 23,
    isStudent: true,
    address: {  //#789
        country: "Thailand",
        city: "Bangkok"
    },
    courses: ["HTML", "CSS", "JS"]//#790
}
//
const copyStudent = {...student}
copyStudent.courses.push("REACT")
console.log(student)

const copyStudent2 = {...student, courses: [...student.courses, "Redux"]}

console.log(student.courses)
console.log(copyStudent2)


const nickName = "Hook"
const copyStudent4 = {...student, nickName: nickName}