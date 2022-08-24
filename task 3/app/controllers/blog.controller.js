const userModel = require("../database/models/blog.model")
class Blog {
    static index = async(req, res)=>{ 
        try{
            const data = await userModel.find()
            res.send({ apiStatus:true, message:"all users fetched", data }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }
    }
    static create = async(req, res) =>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            res.send({ apiStatus:true, message:"user registered", data: userData }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }
    }
    static single = async(req, res)=>{
        try{
            const data = await userModel.findById(req.params.id)
            res.send({ apiStatus:true, message:"all users fetched", data }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }

    }
    static edit = async(req, res)=>{
        try{
            const data = await userModel.findByIdAndUpdate(
                req.params.id,
                req.body, 
                {runValidators:true}
            )
            res.send({ apiStatus:true, message:"all users fetched", data }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }

    }
    static delete = async(req, res)=>{
        try{
            const data = await userModel.findByIdAndDelete(req.params.id)
            res.send({ apiStatus:true, message:"all users fetched", data }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }

    }
}
module.exports=Blog