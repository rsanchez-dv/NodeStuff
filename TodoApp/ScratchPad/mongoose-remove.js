const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Removes all documents
/*
Todo.remove({}).then((result)=>{
  console.log(result)
});
//*/

// Gets back whats being removed.
//*
Todo.findOneAndRemove({_id:'5c08cee0f3ccce2b302edcfe'}).then((todo)=>{

});
//*/
// Finds by Id and remove
//*
Todo.findByIdAndRemove('5c08cee0f3ccce2b302edcfe').then((todo)=>{
    console.log(todo);
});
//*/