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
    notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    notes.getNote(argv.title)
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else {
    console.log('Command not recognized')
}