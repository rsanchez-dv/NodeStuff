const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    // Update an item in the database
    /*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c03865f0f64e72310a41b8f')
    },{
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });
    // */
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c03865f0f64e72310a41b90')
    },{
        $set: {
            name: 'Alex',
            age: 99
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });
    db.close();
});