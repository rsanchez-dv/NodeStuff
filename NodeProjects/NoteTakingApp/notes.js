
var addNote = (title, body) =>{
    console.log('Adding note',title,body)
}

var getAll = () => {
    console.log('Getting All notes')
}
var remove = (title) => {
    console.log('Removing', title)
}
var read = (title) => {
    console.log('Reading',title)
}
module.exports = {
    addNote,
    getAll,
    remove,
    read
}
