const fs = require('fs')
const yargs = require('yargs')

const notes = require('./notes.js')


//argv is the option used running node 
//Ex: node app.js add --title=secrets --body="This is my secret"
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions,
    })
    .command('remove', 'Remove a note', {
        title: titleOptions,
    })
    .help()
    .argv
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
    var allNotes = notes.getAll()
    console.log(`Printing ${allNotes.length} notes(s).`)
    allNotes.forEach((note) => notes.logNote(note))

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