console.log('Starting notes.js')

var addNote = (title, body) => {
    console.log('Adding note', title, body)
}

var getAll = () => {
    console.log('Getting all notes')
}

var getNote = (title) => {
    console.log('Getting note', title)
}

var removeNote = (title) => {
    console.log('Removing note', title)
}

module.exports = {
    //in es6 identical to addNote : addNote (if obj key same name as obj property)
    addNote,
    //above is es6 syntax explained, below is previos es6 to remember
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote,
}


// console.log(module) //output ... exports: {}, ...
// module.exports.age = 25 //add a property to the exports object

// module.exports.addNote = () => {
//     console.log('addNote')
//     return 'New note'
// }