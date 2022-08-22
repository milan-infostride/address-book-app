// const multer = require('multer');

// const imageTypes = ['image/jpeg','image/jpg','image/png']

// const imageStorage = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         console.log('destination called')
//         console.log('request = ',req.user_id)
//         cb(null,'images');
//     },
//     filename: (req,file,cb)=>{
//         console.log('request body multer',req.user_id);
//         //console.log('file body object',file);
//         cb(null,req.user_id + '_' + Date.now()+ path.extname(file.originalname))
//     }
// })

// const imageFileFilter = (req,file,cb)=>{
//     if(imageTypes.includes(file.mimetype)){
//         cb(null,true);
//     }
//     else{
//         cb(null,true);
//     }
// }

// const upload = multer({storage:imageStorage,fileFilter:imageFileFilter});

// const uploadMiddleware