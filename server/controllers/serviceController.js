const stripePackage = require('stripe')
const stripe = new stripePackage('sk_test_51LaKL4SBkB8engaI4pfIG0G0z1Kx16V8ahkwbTKIBsPEPpkP6hVRKHG3BhHIFmTIY3vYGYRyekYx6cT54bdXodGE00XyDio0ws',{
    apiVersion: '2020-08-27'
});
const Service = require('../models/Service');
const ServiceOrder = require('../models/ServiceOrder')
const User = require('../models/User');
const errorHandlingFunction = require('../util/errorHandlingFunction');



const generateStripeSession = (items,successUrl,cancelUrl)=>{

    
    return stripe.checkout.sessions.create({
        line_items: items.map(item=>{
            console.log('item-------',item)
            return {
                amount: item.price,
                name: item.name,
                description: item.description,
                currency: 'inr',
                quantity: 1
            }
            
        }),
        success_url: successUrl,
        cancel_url: cancelUrl
    })
   
    

}
const serviceController = {
    setService: (req,res,next)=>{
        //check user is admin
        //get service data from user
        //add service to services collection
    },
    addService: (req,res,next)=>{
        //find user
        //create service object and set confirmed to false
        //add the service to user model
        
    },
    removeService: (req,res,next)=>{
        //find user
        //remove service id from services array
        //send mail 

    },
    serviceCheckoutHandler: (req,res,next)=>{
        // dummy services
        let services = []
        let createdserviceOrder = null; 
        Service.find({})
        .then(foundServices=>{
            if(foundServices){
                services = foundServices;
                let newServiceOrder = {};
                newServiceOrder.user_id = req.user_id;
                newServiceOrder.services = foundServices;
                newServiceOrder.confirmed = false;
                //save the order with confirmed false
                let serviceOrder = new ServiceOrder(newServiceOrder); 
                return serviceOrder.save();
            }
            const error = new Error();
            error.message = 'services Not found..!!';
            error.statusCode = 404;
            throw error;
        })
        .then(serviceOrderResult=>{
            createdserviceOrder = serviceOrderResult;
            return User.findById(req.user_id)
        })
        .then(foundUser=>{
            foundUser.service_orders.push(createdserviceOrder);
            foundUser.save();
            //get session id and return it
            let successUrl = req.protocol + '://' + req.get('host') + '/success-checkout-handler?user_id='+req.user_id.toString()+'&service_order_id='+createdserviceOrder._id.toString();
            let cancelUrl = req.protocol + '://' + req.get('host') + '/cancel-checkout-handler?user_id='+req.user_id.toString();
            return generateStripeSession(services,successUrl,cancelUrl)

        })
        .then(session=>{
            
            res.status(200).json({sessionId: session.id})
        })
        .catch(err=>{
            console.log(err);
            errorHandlingFunction(err, res);
        })

    },
    getSessionId: (req,res,next)=>{

    },
    successCheckoutHandler: (req,res,next)=>{
        let serviceOrder = null;
        let user = null;
        //find user
        console.log('query params----',req.query);
        User.findById(req.query.user_id)
        .then(foundUser=>{
            if(foundUser){
                user = foundUser;
                //find service order using id
                return foundUser.getServiceOrderbyId(req.query.service_order_id)
            }
            const error = new Error();
            error.message = 'users Not found..!!';
            error.statusCode = 404;
            throw error;

        })
        .then(foundServiceOrder=>{
            //extract respective service id's
            if(foundServiceOrder){
                console.log("Nest console")
                serviceOrder = foundServiceOrder;
                foundServiceOrder.services.forEach(service=>{
                    //add to services array in user
                    console.log("newData---------", service._id, "data------------------", service)
                    if(!user.services.includes(service._id.toString())){
                        user.services.push(service._id);
                    }
                    
                })
                return user.save();
                 
            }
            const error = new Error();
            error.message = 'service order Not found..!!';
            error.statusCode = 404;
            throw error;
        })
        .then(userSaveResult=>{
            //change the confirmed to true in service order
            serviceOrder.confirmed = true;
            //save service order
            return serviceOrder.save()
        })
        .then(serviceOrderSaveResult=>{
            //send mail to user
            res.send('Checkhed Out succesfully');
            console.log('Success checkout handler worked...!!')
        })
        .catch(err=>{
            console.log(err);
            errorHandlingFunction(error, res);
        })


    },
    cancelCheckoutHandler: (req,res,next)=>{

    }
}

module.exports = serviceController