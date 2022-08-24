const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name:{ type:String, required:true, trim:true},
    email:{ type:String, required:true, trim:true, unique:true},
    password:{ type:String, required:true, trim:true },
    status:{ type:Boolean, default:false },
    age:{ type:Number, min:21, max:60, default:21 }
    }, 
    { timestamps:true }
    )
const User = mongoose.model("User", userSchema)
module.exports=User