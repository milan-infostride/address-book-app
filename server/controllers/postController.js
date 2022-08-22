const Post = require('../models/Post');
const User = require('../models/User');




const errorHandlingFunction = require('../util/errorHandlingFunction');
const postController = {

    addPost: (req,res,next)=>{
        //let user = null;
        let currentPost = null;
        //create post object
        //console.log('req.body.image_url = ',req.body.image_url)
        console.log('body object -------',req.body);
        let newPost = {
            caption: req.body.caption,
            images:[],
            user: req.user_id       //save user id in added post
            
        }


        //transform post
        console.log('files object ----',req.files);
        newPost.images = req.files.map(file=>{
            let newFile = {...file};
            delete newFile.fieldname;
            delete newFile.originalname;
            return newFile;
        })

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
    addPostVideo: (req,res,next)=>{
        let currentPost = null;
        //create post object
        //console.log('req.body.image_url = ',req.body.image_url)
        console.log('body object -------',req.body);
        let newPost = {
            caption: req.body.caption,
            video: {},
            user: req.user_id       //save user id in added post
            
        }


        //transform post
        console.log('files object ----',req.file);
        newPost.video = {...req.file};
        delete newPost.video.originalname;
        delete newPost.video.fieldname;

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