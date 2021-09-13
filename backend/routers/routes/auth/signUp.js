const express=require("express")

const{createNewUser,getUsers}=require("../../controllers/auth/signUpController")

const signUpRouter=express.Router()

signUpRouter.post("/",createNewUser)
signUpRouter.get("/",getUsers)
module.exports=signUpRouter