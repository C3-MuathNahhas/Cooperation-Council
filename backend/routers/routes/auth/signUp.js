const express=require("express")
const{createNewUser}=require("../../controllers/auth/signUpController")
const signUpRouter=express.Router()

signUpRouter.post("/",createNewUser)

module.exports=signUpRouter