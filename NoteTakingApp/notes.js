const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e){
        console.log("Could not find existing file. Creating new.");
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',  JSON.stringify(notes));

}

var addNote = (title, body) =>{
    var notes = fetchNotes()
    var note = {
        title,
        body
    }
    // Moves any matches note.title with title and moves it to the duplicateNotes
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

var getAll = () => {
    return fetchNotes();
}
var remove = (title) => {
    var notes = fetchNotes();
    // Moves all the titles that do not match title and moves them to filteredNotes.
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}
var read = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
}
var logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}
module.exports = {
    addNote,
    getAll,
    remove,
    read,
    logNote
}
