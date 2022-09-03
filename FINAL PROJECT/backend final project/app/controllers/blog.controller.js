const blogmodel = require("../database/models/blog.model")
class Blog{
    static index = async(req, res)=>{ // localhost:3000/blog/
        try{
            const blogData = await blogmodel.find()
            res.send({apiStatus:true, data:blogData, message:"done"})
        }
        catch(e){
            res.send({apiStatus:false, message:e.message, data:e})
        }
    }
    static create = async (req,res)=>{
        try{
            const blogData = new blogmodel({
                // userId:req.user._id, 
                ...req.body
            }) 
            await blogData.save()
            res.send({apiStatus:true, data:blogData, message:"done"})
        }
        catch(e){
            res.send({apiStatus:false, message:e.message, data:e})
        }
    }
    static getMyPosts =  async(req, res)=>{ // localhost:3000/blog/
        try{
            const blogData = await blogmodel.find({userId:req.user._id})
            res.send({apiStatus:true, data:blogData, message:"done"})
        }
        catch(e){
            res.send({apiStatus:false, message:e.message, data:e})
        }
    }
    static myposts = async(req,res)=>{ // localhost:3000/blog/
        try{
            await req.user.populate("myPosts")
            res.send({apiStatus:true, data:req.user.myPosts, message:"done"})
        }
        catch(e){
            res.send({apiStatus:false, message:e.message, data:e})
        }
    }


    static single = async(req, res)=>{
        try{
            const data = await blogmodel.findById(req.params.id)
            res.send({ apiStatus:true, message:"single blog fetched", data }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }

    }

    static edit = async(req, res)=>{
        try{
            const data = await blogmodel.findByIdAndUpdate(
                req.params.id,
                req.body, 
                
            )
            res.send({ apiStatus:true, message:"all users fetched", data }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }

    }

    static all = async(req, res)=>{
        try{
            const data = await blogmodel.find(req)
            res.send({ apiStatus:true, message:"all blogs fetched", data }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }
       
    }

    static deleteblog = async(req, res)=>{
        try{
            console.log("here at backend delete 3333")
            console.log("req params id")
            console.log(req.params.id)
            const data = await blogmodel.findByIdAndDelete(req.params.id)
            console.log("ba3d wait")
            res.send({ apiStatus:true, message:"deleteeee", data }) 
        }
        catch(e){
            res.send({ apiStatus: false, message:e.message, data:e })
        }

    }
}
module.exports = Blog