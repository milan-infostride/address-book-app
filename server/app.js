const http = require('http');
const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const myConnect = require('./conection').myConnect;
const getDb = require('./conection').getDb;
const app = express();
const server = http.createServer(app);
const userRoutes = require('./routes/userRoutes')

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
            
            
myConnect(()=>{
server.listen(5000,()=>{
                console.log('server connected on port 5000')
            })

})
// setting bodyParser Middleware
app.use(bodyParser.json());
// setting api routes
app.use('/api',userRoutes);
