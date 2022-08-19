const errorHandlingFunction = (error,res)=>{
    !error.statusCode?error.statusCode=500:console.log(error);
    res.status(error.statusCode).json({error: error})
}

module.exports = errorHandlingFunction;