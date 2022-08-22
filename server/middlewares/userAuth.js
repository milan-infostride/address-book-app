const errorHandlingFunction = require('../util/errorHandlingFunction')
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const userAuth = (req,res,next)=>{
    let decodedToken = null;
    const token = req.get('Authorization').split(' ')[1];
    try {
        if(req.get('Authorization')){
            decodedToken = jwt.verify(token,'meraSecret')
        }
        else{
            const error = new Error();
            error.message = 'no authorization token send'
            throw error;
        }
        
    }
    catch(err){
        //err.statusCode(500);
        errorHandlingFunction(err,res);
    }
    if(!decodedToken){
        console.log('invalid token')
        const error = new Error('invalid Token');
        error.statusCode = 500;
        errorHandlingFunction(error,res);
    }
    else{
        req.user_id = decodedToken.user_id;
        req.user_email = decodedToken.user_email;
        next();
    }
    
}

module.exports = userAuth;