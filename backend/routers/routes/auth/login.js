const express=require("express")
const{Login}=require("../../controllers/auth/loginController")
const loginRouter=express.Router()
loginRouter.post("/",Login)
module.exports=loginRouter