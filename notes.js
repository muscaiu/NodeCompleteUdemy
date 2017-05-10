const fs = require('fs')

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json')
        return JSON.parse(notesString)
    } catch (e) {
        return []
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
    console.log('Adding note =>', title, body)
    var notes = fetchNotes()
    var note = {
        title, //remember es6 way
        body: body //es5 way
    }

    // var duplicateNotes = notes.filter((note) => {
    //     return note.title === title
    // })
    var duplicateNotes = notes.filter((note) => note.title === title) //es6 same as above

    if (duplicateNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
    } else {
        console.log('Note already exists')
    }
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