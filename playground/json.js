var obj = {
    name: 'Cris'
}
var stringObj = JSON.stringify(obj)
console.log(typeof stringObj)
console.log(stringObj)

var personString = '{"name" : "Cris", "age":37}'
var person = JSON.parse(personString)

console.log(typeof person)
console.log(person)