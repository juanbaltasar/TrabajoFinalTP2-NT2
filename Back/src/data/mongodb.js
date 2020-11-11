const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017';

const Nombredb = 'TrabajoFinalTP2';

const client = new MongoClient(url);

client.connect((err) => {
    if (!err) {
        console.log('Connected')
    }

    const db = client.db(Nombredb)
    insertDocuments(db, (res) => {
        console.log('Inserted a document. ' + res)
    })
})

function insertDocuments(db, callback){
    const collection = db.collection('documents')
    collection.insertMany([{a:1}], (err, res) => {
        if (!err) {
            callback(res)
        }
    })
}

function findDocuments(db, callback){
    const collection = db.collection('documents');

    
}