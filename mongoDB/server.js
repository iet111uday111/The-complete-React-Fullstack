const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/mongoClientTest'

/**
 * Connecting to Database
 */
// MongoClient.connect(url, (err, db) => {
//     if(err){
//      return console.log('could not connect : ',err.message);
//     }

//     console.log('Connected!!!!!!!!!');
//     db.close()
// });

/**
 * Insering single document
 */
// MongoClient.connect(url, (err, db) => {
//     if(err){
//      return console.log('could not connect : ',err.message);
//     }

//     db.collection('Cars').insertOne({
//         model: 'Ford',
//         year: 2018
//     },(err, response) => {
//         if(err){
//             return console.log(`Cannot insert: ${err}`);
//         }
//         console.log(response.ops);
        
//     });
//     db.close();
// });

/**
 * Inserting Multiple Data
 */
// MongoClient.connect(url, (err, db) => {
    
//     if(err){
//      return console.log('could not connect : ',err.message);
//     }
//     const cars = [
//         {
//             model: "Chevy",
//             year: "2018"
//         },
//         {
//                 model: "Nissan",
//                 year: "2010"
//         }
//     ]
//     db.collection('Cars').insert(cars,(err, response) => {
//         if(err){
//             return console.log(`Cannot insert: ${err}`);
//         }
//         console.log(response.ops);
        
//     });
//     db.close();
// });

// MongoClient.connect(url, (err, db) => {
    
//     if(err){
//      return console.log('could not connect : ',err.message);
//     }
//     const cars = [
//         {
//             model: "Chevy",
//             year: "2018"
//         },
//         {
//                 model: "Nissan",
//                 year: "2010"
//         }
//     ]
//     db.collection('Cars').insertMany(cars,(err, response) => {
//         if(err){
//             return console.log(`Cannot insert: ${err}`);
//         }
//         console.log(response.ops);
        
//     });
//     db.close();
// });

/**
 * Getting Data from Database
 */

//  MongoClient.connect(url, (err, db) => {
//     if(err){
//      return console.log('could not connect : ',err.message);
//     }

//     db.collection('Cars')
//         .find({
//             year: '2010'
//         })
//         .skip(5)
//         .limit(3)
//         .sort({"_id": -1})
//         .toArray()
//         .then((data) => {
//             console.log(data);
//         });
//     db.close();
// });

/***
 * Deleting Documents
 * 
 */

//  MongoClient.connect(url, (err, db) => {
//     if(err){
//      return console.log('could not connect : ',err.message);
//     }

//     db.collection('Cars').deleteMany({year: '2010'},(err, doc) =>{
//         console.log(doc);
//     })
//     db.close();
// });

/**
 * Update Document
 * 
 */
 MongoClient.connect(url, (err, db) => {
    if(err){
     return console.log('could not connect : ',err.message);
    }

    db.collection('Cars')
        .findOneAndUpdate(
            {
                year: 2010
            },
            {
                $set:{
                    model: "changed"
                },
                $inc: {
                    year: +1
                }
            },
            {
                upsert: true,
                returnOriginal: false
            },
            (err, doc) =>{
                 console.log(doc);
            }
        )
    db.close();
});
