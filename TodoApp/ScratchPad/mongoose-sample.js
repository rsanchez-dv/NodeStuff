var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Setting up models
var Todo = mongoose.model('Todo',{
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('User',{
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});
// Creating new Todo
var newTodo = new Todo({
    text: 'Finish Node course',
    completed: false,
    completedAt: 0
});
// Creating new user
var newUser = new User({
    email: 'rsanchez92@live.com'
});
// Saving to DB
newTodo.save().then((doc)=>{
    console.log('Saved todo', doc)
}, (e)=>{
console.log('Unable to save to DB')
});

newUser.save().then((doc)=>{
    console.log('Saved User',doc)
},(e)=>{
    console.log('Unable to save User')
});