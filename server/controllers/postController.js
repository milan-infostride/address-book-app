const Post = require('../models/Post');
const User = require('../models/User');
const errorHandlingFunction = require('../util/errorHandlingFunction');
const postController = {

    addPost: (req,res,next)=>{
        //let user = null;
        let currentPost = null;
        //create post object
        console.log('req.body.image_url = ',req.body.image_url)
        let newPost = {
            caption: req.body.caption,
            image_urls: [req.body.image_url],
            user: req.user_id       //save user id in added post
            
        }
        //add post
        let post = new Post(newPost)
        post.save()
        .then(addedPost=>{
            //save post in users post array
           //console.log("Save data", result);
          currentPost = addedPost;  
          return User.findById(req.user_id)
        })
        .then(user=>{
            if(user){
                user.posts.push(currentPost);
                return user.save()
            }
            const error = new Error();
            error.message = 'invalid user'
            throw error;
        })
        .then(result=>{
            console.log('result =',result)
            res.status(201).json({message: 'Post added succefully..!!'});
        })
        .catch(err=>{
            errorHandlingFunction(err,res);
        })
    },
    getPosts: (req,res,next)=>{
        //search for all posts of that user
        //send the posts in response
    }
}

module.exports = postController;