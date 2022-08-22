const express = require('express');
const Router = express.Router();
const path = require('path');
const userAuth = require('../middlewares/userAuth');
const postControlller = require('../controllers/postController')

const multer = require('multer');

const imageTypes = ['image/jpeg','image/jpg','image/png']

const imageStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        console.log('destination called')
        console.log('request = ',req.user_id)
        cb(null,'images');
    },
    filename: (req,file,cb)=>{
        console.log('request body multer',req.user_id);
        //console.log('file body object',file);
        cb(null,req.user_id + '_' + Date.now()+ path.extname(file.originalname))
    }
})

const imageFileFilter = (req,file,cb)=>{
    if(imageTypes.includes(file.mimetype)){
        cb(null,true);
    }
    else{
        cb(null,true);
    }
}

const videoStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'videos');
    },
    filename: (req,file,cb)=>{
        cb(null,req.user_id+ '_' + Date.now()+ path.extname(file.originalname))
    }
})

// const upload = multer({storage:imageStorage,fileFilter:imageFileFilter});


Router.post('/add-post',userAuth,multer({storage:imageStorage,fileFilter:imageFileFilter}).array('images',5),postControlller.addPost);
 
Router.post('/add-post-video',userAuth,multer({storage:videoStorage}).single('video'),postControlller.addPostVideo)


// Router.post('/add-post',userAuth)

module.exports = Router;