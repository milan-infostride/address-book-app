const User = require('../models/User');

const userController = {
     signUpUser : (req,res,next)=>{
        //console.log('req = ',req);
        let currentUser = null; 
        console.log('email = ',req.body.email);
        User.findByEmail(req.body.email).then(result=>{
            console.log('findone result:',result);
            if(result)
                currentUser = result;
                if(!currentUser){

                    let newUser ={}
                    newUser.profile_url= req.body.profile_url;
                    newUser.bio = req.body.bio;
                    newUser.number = req.body.number;
                    newUser.groups = [];
                    newUser.email =  req.body.email;
                    newUser.chat_areas = [];
                    let user = new User(newUser);
                    user.save();
                    console.log('user Added');
                    res.json({message: 'user Added successfully'})
                }
                else{
                    res.json({message: 'user already exist'})
                }
               
            //currentUser = res;
        });
        

    }
}

module.exports = userController;