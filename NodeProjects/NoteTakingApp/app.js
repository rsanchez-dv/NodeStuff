console.log('Starting App.js')

const fs = require('fs')
const os = require('os')
// Runs the file
const notes = require('./notes')

var user = os.userInfo();

fs.appendFile('greetings.txt', 'Hello ' + user.username + "!"+"Your age is "+notes.age+"\n", function(err) {
    if(err) {
        console.log('Unable to write to file.')
    }
})