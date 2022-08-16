const http = require('http');
const express = require('express');
// const mongoose = require('mongoose');
const myConnect = require('./conection').myConnect;
const getDb = require('./conection').getDb;
const reqHandler = express();
const app = http.createServer(reqHandler);
// const password = encodeURIComponent('Milansingh@1')
// let db = null;

// mongoose.connect('mongodb+srv://milan:'+password+'@cluster0.hgtna.mongodb.net/myDb?retryWrites=true&w=majority')
// .then(res=>{
//     console.log('mongoose connection result',res);
//     db = res.connections[0].db;
//     console.log('db = ',db)
    
//     app.listen(5000,()=>{
//         console.log('server connected on port 5000')
//     })
   
    // db.collection('demoCollection').insertOne({name:'milan'})
    // .then(res=>{console.log('inserted')})
    // .catch(err=>{console.log('insertion error = ',err)});
// })
// .catch(err=>{
//     console.log('error while connection =', err);
// })

myConnect(()=>{
    app.listen(5000,()=>{
                console.log('server connected on port 5000')
            })

})

// reqHandler.use('/insert',(req,res,next)=>{
//     try{
//         let db = getDb();
//         db.collection('demoCollection').insertOne({name:'saransh'})
//         .then(res=>{console.log('inserted')})
//         .catch(err=>{console.log('insertion error = ',err)});
//     }
//     catch(err){
//         console.log(err);
//     }

// })

