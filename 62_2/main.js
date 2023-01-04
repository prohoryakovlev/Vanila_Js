let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // isStudent: true
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
]
const findBob = (st) => st.name === "Bob"

// map, filter, sort

// const getStScores = (st) => st.scores
// const getStName = (st) => st.name
//
//
//
// const getNames = (arr) => {
//     const result = []
//
//     const getStName = (st) => st.name
//
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = getStName(arr[i])
//     }
//     return result
// }
//
// const getScores = (arr) => {
//     const getStScores = (st) => st.scores
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = getStScores(arr[i])
//     }
//     return result
// }
//
// const getResult = (arr, fn) => {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = fn(arr[i])
//     }
//     return result
// }
// console.log(getResult(students, getStName))
// console.log(students.map(getStName))
// console.log(getResult(students, getScores()))
//
//
// const selfMadeFilter = (arr, filterFn) => {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (filterFn(arr[i]) === true) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// const func = (st) => st.scores >= 100
// console.log(students.filter(func))
// console.log(selfMadeFilter(students, func))
//









