// Used for files
const fs = require('fs')
// Used for Operating system uses
const os = require('os')
// Contains useful tools
const _=require('lodash')
// Used for parsing inputs
const yargs = require('yargs')

// Runs the file
const notes = require('./notes')
// Reads in arguements from command line
const argv = yargs.argv;
// Gets the command to run features
var command = argv._[0]

if (command ==='add'){
    var note = notes.addNote(argv.title, argv.body)
    if(note){
        console.log('Note created')
        notes.logNote(note)
    } else {
        console.log('Note title already exists.')
    }
}else if(command === 'list'){
   var allNotes = notes.getAll()
   console.log(`Printing ${allNotes.length} notes.`)
   allNotes.forEach((note) => notes.logNote(note))
} else if(command ==='remove'){
    var removed = notes.remove(argv.title)
    var message = removed ? 'Note was removed.' : 'Note not found.'
    console.log(message)

} else if(command ==='read'){
    var note = notes.read(argv.title)
    if(note) {
        console.log('Note Found!')
        notes.logNote(note)
    }else {
        console.log('Note not found.')
    }
} else {
    console.log('Command not recognized.')
}
