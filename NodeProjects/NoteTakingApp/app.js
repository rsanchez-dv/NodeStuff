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
    notes.addNote(argv.title, argv.body)
}else if(command === 'list'){
    notes.getAll()
} else if(command ==='remove'){
    notes.remove(argv.title)
} else if(command ==='read'){
    notes.read(argv.title)
} else {
    console.log('Command not recognized.')
}
