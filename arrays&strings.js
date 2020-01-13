/*const arr = ['juani', 'dani']

arr[0]

const persona = {
    name: 'juani',
    surname: 'gallo',
    age: 26
}

console.log(persona.age)

function suma(a, b) {
    return a + b
}*/

class Counter {
    constructor() {
        this.value = 0
    }
    suma() {
        this.value = this.value + 1
    }
    resta() {
        this.value = this.value - 1
    }
}
const counter = new Counter()
console.log(counter.value)
counter.suma()
counter.suma()
console.log(counter.value)
counter.suma()
console.log(counter.value)
counter.suma()
console.log(counter.value)
