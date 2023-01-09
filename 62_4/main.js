// Есть ли обработчик? (function) => Handler, Listener, Subscriber
// При вызове формируется объект  ({}) => event, ev, e
// Если есть хэндлер => function() => callback

const todoLists = [
    {
        id: 1,
        title: "What to lear",
        tasks: [
            {name: "HTML", isDone: true},
            {name: "CSS", isDone: true},
        ]
    },
    {
        id: 2,
        title: "What to buy",
        tasks: [
            {name: "Beer", isDone: false},
            {name: "Fish", isDone: false},
        ]
    }
]

const tasks = {
    1: [
        {name: "HTML", isDone: true},
        {name: "CSS", isDone: true},
    ],
}






