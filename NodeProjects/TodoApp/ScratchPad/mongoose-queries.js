const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c087e8d87ef81420751a8ce1';

// if(!ObjectID.isValid(id)){
//     console.log('Id is not valid.')
// }
// Returns an array of objects if no match it returns an empty array
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
// Returns either object or null
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });
// Returns either object or null
// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e)=>console.log(e));

User.findById('5c088267e53282f6879de317').then((foundUser)=>{
    if(!foundUser){
        return console.log('Couldnt find anyone.')
    }
    console.log('User Found',JSON.stringify(foundUser,undefined,2))
},(e) =>{
    console.log('error occured')
});