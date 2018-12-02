const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Database Server.');
    }
    console.log('Connected to MongoDb server.');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c03190d82e71f7b89ce30d8')
    // }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos: count: ${count}`);

    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    
    //db.close();
});