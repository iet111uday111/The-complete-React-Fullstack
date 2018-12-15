const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/mongoClientTest'

// MongoClient.connect(url, (err, db) => {
//     if(err){
//      return console.log('could not connect : ',err.message);
//     }

//     console.log('Connected!!!!!!!!!');
//     db.close()
// });

MongoClient.connect(url, (err, db) => {
    if(err){
     return console.log('could not connect : ',err.message);
    }

    db.collection('Cars').insertOne({
        model: 'Ford',
        year: 2018
    },(err, response) => {
        if(err){
            return console.log(`Cannot insert: ${err}`);
        }
        console.log(response.ops);
        
    });
    db.close();
});

