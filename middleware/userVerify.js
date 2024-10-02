const jwt = require("jsonwebtoken")
const verify = (req,res,next) =>{
    const tokenCheck = req.headers['authorization']
    const extractedToken = tokenCheck.split(" ")[1]
    jwt.verify(extractedToken,process.env.SECRET_KEY , (err,decode) =>{
        if(err){
            console.log(err)
        }
        else{
            const email = decode.email
            const name = decode.name
            console.log(name,email)
            next()
        }
    })
}

module.exports = verify;