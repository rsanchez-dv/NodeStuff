//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Database Server.');
    }
    console.log('Connected to MongoDb server.');

    // db.collection('Todos').insertOne({
    //     text: 'Do Something',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert Todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops))
    // })

    // db.collection('Users').insertOne({
    //     // Be able to overwrite ID to make unique
    //     name: 'Roberto',
    //     age: 25,
    //     location: 'Los Angeles'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user.', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });
    // db.close();
});