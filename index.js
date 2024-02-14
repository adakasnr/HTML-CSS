const data = [
    {
        id: 1,
        name: "sriman",
        age: 20
    },
    {
        id: 2,
        name: "siva",
        age: 25
    }, {
        id: 3,
        name: "Nagaraju",
        age: 24
    },
]

const obj = {
    name: "Nagaraju",
    bike: "FZ"
}

const { name, bike } = obj;

// const name = obj.name;
// const bike = obj.bike;

data.map((item) => {
    console.log(item.name, item.age);
})

data.map(({ name, age }) => {
    console.log(name, age);
})