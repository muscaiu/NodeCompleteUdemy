console.log('Starting notes.js')

// console.log(module) //output ... exports: {}, ...
// module.exports.age = 25 //add a property to the exports object

module.exports.addNote = () => {
    console.log('addNote')
    return 'New note'
}