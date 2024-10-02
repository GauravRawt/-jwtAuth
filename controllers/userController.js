const userModel = require("../model.js/userModel")
const jwt = require("jsonwebtoken")

var handleSignup =  (req,res) =>{
    userModel.create(req.body)
    .then(()=>{
        res.json({Message : "Data Created Successfully"}).status(201)
    })
    .catch(err=>{
        res.json({err : err}).status(400)
    })
}

const handleLogin = (req,res) =>{
    let {email} = req.body;
    userModel.find({email:email}).then((response)=>{
        if (response.length>=1){
            jwt.sign(req.body,process.env.SECRET_KEY,(err,token)=>{
                if (err){
                    res.json({
                        message : " ERROR",
                        err : err
                    }).status(400)
                }
                else{
                    res.json({
                        message : "Data Added Successfully",
                        data :req.body,
                        token :token
                    }).status(201)
                }
            })
        }
    })
}

const getDetails = (req,res) =>{

}

module.exports = {handleLogin,handleSignup,getDetails}

