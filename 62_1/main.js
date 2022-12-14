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


const users = [
    {
        id: 1,
        name: "Bob",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 3,
        name: "Abb",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 4,
        name: "Donald",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
]
const newUser = {
    id: 5,
    name: "DonaldDD",
    isStudent: true,
    address: {
        country: "Sudan",
        city: "Hartum",
    }

}

const users2 = [...users, newUser] //Добавление эл-та в массив

// удалить элемент === 3
const users3 = users.filter(user => user.id !== 3) // false
console.log(users3)

// id = 1, new city = "Sudan" Изменения свойстра массива у объекта.
const users4 = users.map(user => user.id === 1 ? {...user,name: "Ali", address: {...user.address, city: "Chebocsary"}} : user)
console.log(users4)

const users5 = users4.map(user => user.id === 1 ? {...user, name: "Ali"}: user)
console.log(users5)















