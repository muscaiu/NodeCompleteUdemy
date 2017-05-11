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
        return note
    }
}

var getAll = () => {
    return fetchNotes()
}

var getNote = (title) => {
    var notes = fetchNotes()
        // var filterNotes = notes.filter((note) => {
        //     return note.title === title
        // })
    var filterNotes = notes.filter((note) => note.title === title) //es same as above
    return filterNotes[0]
}

var removeNote = (title) => {
    var notes = fetchNotes()
    var filterNotes = notes.filter((note) => note.title != title)
    saveNotes(filterNotes)
    return notes.length !== filterNotes.length
}

var logNote = (note) => {
    debugger
    console.log('--')
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}

module.exports = {
    //in es6 identical to addNote : addNote (if obj key same name as obj property)
    addNote,
    //above is es6 syntax explained, below is previos es6 to remember
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote,
    logNote: logNote
}


// console.log(module) //output ... exports: {}, ...
// module.exports.age = 25 //add a property to the exports object

// module.exports.addNote = () => {
//     console.log('addNote')
//     return 'New note'
// }