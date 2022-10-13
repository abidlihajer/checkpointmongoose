const User=require('../models/User')

exports.addUser=async(req,res)=>{
    let {lastname,firstname,email,password,age}=req.body
    age=Number(age)
    try {
        const checkUser=await User.findOne({email})
        if(checkUser){
            return res.send("user is already exists")
        }
        const user= new User({
            lastname,firstname,email,password,age
        })
        await user.save()
        res.status(201).send({msg:"user created",user})
    } catch (error) {
        res.status(500).send("server error")
    }
}
exports.getAllUser=async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send("server error")
    }
}
exports.deleteUser=async(req,res)=>{
    const {id}=req.params
    try {
        await User.findByIdAndDelete(id)
        res.send("user deleted")
    } catch (error) {
        res.status(500).send("server error") 
    }
}
exports.updateUser=async(req,res)=>{
    const {id}=req.params
    try {
      const updateuser=  await User.findByIdAndUpdate(id,{$set:{...req.body}},{new:true})
        res.send(updateuser)
    } catch (error) {
        res.status(500).send("server error") 
    }
}
exports.getUser=async(req,res)=>{
    const {id}=req.params
    try {
       const user= await User.findById(id)
        res.send(user)
    } catch (error) {
        res.status(500).send("server error") 
    }
}