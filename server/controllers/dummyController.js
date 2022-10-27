const DummyData = require("../models/DummyData");
const errorHandlingFunction = require("../util/errorHandlingFunction");

const dummyController = {
    sendDummyData(req,res,next){
        let data = [];
        for(i=1;i<=10000;i++){
            data.push({name:'product '+ i});
        }
        res.status(200).json({
            data
        })
    },
    async addDummyData(req,res,next){
        for(let i=req.body.start;i<=req.body.end;i++){
            let dummy = {
                name: 'product ' + i
            }
            let newDummy = new DummyData(dummy);
            await newDummy.save()
        }
        res.status(201).json({message: 'Added Successfully...!!'})
    },
    getPaginatedDummyData(req,res,next){
        const currentPage = req.query.page || 1;
        const perPage = 3;
        let totalItems;
        DummyData.find()
        .countDocuments()
        .then(count=>{
            totalItems = count;
            return DummyData.find()
                .skip((currentPage-1) * perPage)
                .limit(perPage)
        })
        .then(data=>{
            res.status(200)
            .json({message: 'Posts Fetched Successfully...!!', data: data, totalItems: totalItems})
        })
        .catch(err=>{
            console.log('error---',err)
            errorHandlingFunction(err,res)
        })
    }

}

module.exports = dummyController