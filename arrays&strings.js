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
    constructor(startValue) {
        this.value = startValue
    }

    suma() {
        this.value = this.value + 1
    }

    resta() {
        this.value = this.value - 1
    }
}

const counter = new Counter(0)
console.log(counter.value) //0
counter.suma()
counter.suma()
counter.suma()
console.log(counter.value) //3
counter.resta()
console.log(counter.value) //2
