const fs = require('fs')
const yargs = require('yargs')

const notes = require('./notes.js')


//argv is the option used running node 
//Ex: node app.js add --title=secrets --body="This is my secret"
const argv = yargs.argv
var command = argv._[0] //_ is not lodash but the array of objects in argv
    // console.log('Command:', command)
    // console.log('Yargs:', argv)

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('Note saved')
        notes.logNote(note)
    } else {
        console.log('Note already exists')
    }
} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    var note = notes.getNote(argv.title)
    if (note) {
        console.log('Note found')
        notes.logNote(note)
    } else {
        console.log('Note not found')
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title)
    var message = noteRemoved ? 'Note was removed' : 'Note not found'
    console.log(message)
} else {
    console.log('Command not recognized')
}