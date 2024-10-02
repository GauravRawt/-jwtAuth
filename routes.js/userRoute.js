const express = require("express");
const { handleLogin, getDetails, handleSignup } = require("../controllers/userController");
const verify = require("../middleware/userVerify")

const router = express.Router();
router.post("/signup",handleSignup)
router.post("/login",handleLogin)
router.get("/getDetails",verify,getDetails)

module.exports = router;