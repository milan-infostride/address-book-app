const Post = require('../models/Post');
const postController = {

    addPost: (req,res,next)=>{
        //create post object
        let newPost = {
            caption: req.body.caption,
            image_url: req.body.image_url,
            user: req.user_id       //save user id in added post
            
        }
        //add post
        let post = new Post(newPost)
        post.save()
        .then(result=>{
            console.log("Save data", result)
        })
        //save post in users post array
    }
}