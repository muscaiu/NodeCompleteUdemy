var square = x => x * x
console.log(square(9))

var user = {
    name: 'Cris',
    sayHi: () => {
        console.log(arguments) //u get the global obj
        console.log(`Hi, ${this.name}`) //undefined
    },
    sayHiAlt() {
        console.log(arguments) //ok
        console.log(`Hi, ${this.name}`) //ok
    }
}

//WHEN USING this or arguments keyword, use the sayHiAlt syntax

user.sayHi()
user.sayHiAlt(11, 22, 33)