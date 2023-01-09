// Есть ли обработчик? (function) => Handler, Listener, Subscriber
// При вызове формируется объект  ({}) => event, ev, e
// Если есть хэндлер => function() => callback

const todoListId_1 = "12df-asds"
const todoListId_2 = "45df-asds"

const todoLists = [
    {
        id: todoListId_1,
        title: "What to lear",
    },
    {
        id: todoListId_2,
        title: "What to buy",
    }
]

const tasks = {
    [todoListId_1]: [
        {name: "HTML", isDone: true},
        {name: "CSS", isDone: true},
    ],
    [todoListId_2]: [
        {name: "Beer", isDone: false},
        {name: "Fish", isDone: false},
    ]
}

const nums = [1, 2, 3, 4]
console.log()





