var MongoClient = require('mongodb').MongoClient; //importar modulo

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true},
(err, client) => {
    db = client.db('dbEmployees');

    if(err) throw err;
    db.collection('employee').find().toArray(function(err, result){
        if(err) throw err;
        console.log(result);
    });
});