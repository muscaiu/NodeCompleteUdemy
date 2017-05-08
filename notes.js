console.log('Starting notes.js')

var addNote = (title, body) => {
    console.log('Adding note', title, body)
}

module.exports = {
    addNote //in es6 identical to addNote : addNote (if obj key same name as obj property)
}


// console.log(module) //output ... exports: {}, ...
// module.exports.age = 25 //add a property to the exports object

// module.exports.addNote = () => {
//     console.log('addNote')
//     return 'New note'
// }