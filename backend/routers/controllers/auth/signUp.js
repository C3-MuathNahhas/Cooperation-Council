const signModel=require("../../../db/models/userSchema")

const createNewUser=(req,res)=>{
 const{firstName,lastName,email,password,phone}=req.body
   
const newUser= new signModel({
    firstName,
    lastName,
    
    email,
    password,
    phone
}).save().then((result)=>{
    
    res.status(201);
    res.json({ success: true, message: "new user created",result:result });
}).catch((err)=>{
    res.status(500);
    res.json("server error");
})
}
module.exports={createNewUser}