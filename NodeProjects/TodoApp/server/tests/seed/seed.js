const {ObjectID} = require('mongodb');
const{Todo} = require('./../../models/todo');
const {User} = require('./../../models/user')
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const userThreeId = new ObjectID();

const users = [
    {
    _id: userOneId,
    email: 'asdf@live.com',
    password: 'userpassword',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId,access:'auth'},'asdf').toString()
        }]
    },{
        _id: userTwoId,
        email: 'lkjhd@live.com',
        password: 'userpassword123'
    },{
        _id: userThreeId,
        email: 'vrwervs@live.com',
        password: 'adfsdfewaf',
        tokens: [{
            access: 'auth',
            token: jwt.sign({_id: userThreeId,access:'auth'},'asdf').toString()
            }]
    }
];




const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
}, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done)=>{
    User.remove({}).then(()=>{
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();
        var userThree = new User(users[2]).save();

        return Promise.all([userOne,userTwo,userThree])
    }).then(()=>{
        done();
    })
}

module.exports = {todos, populateTodos,users,populateUsers};
