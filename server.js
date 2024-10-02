const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes.js/userRoute");
const app = express();

dotenv.config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

mongoose.connect(process.env.MONGO_URI,{})
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log(err)
})

app.use('/api/v2/user',router)

app.listen(process.env.PORT, () =>{
    console.log(`The Server is running on port ${process.env.PORT}`)
})