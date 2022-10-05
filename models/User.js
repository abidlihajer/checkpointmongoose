const mongoose =require('mongoose')
const userSchema=new mongoose.Schema({
    lastname:{
        type:String,required:true
    },
    firstname:{
        type:String,required:true
    },
    email:{
        type:String,required:true,unique:true
    },
    motdepass:{
        type:String&&Number,required:true,unique:true
    },
    age:Number
})
module.exports=mongoose.model("User",userSchema)
