const {ObjectId} = require("mongodb")
const connection = require("../database/connect")
const getIndex = (allUsers, val, key) =>{
    const index = allUsers.findIndex(user=> user[key] == val)
    return index
}
class User {
    static add = (req,res) => {
        res.render("add", {pageTitle:"add article"})
    }

    static addLogic = (req, res) =>{
        let errors={}, hasError=false
        if(!req.body.title) {
            errors.name="please add title"
            hasError=true
        }
        if(!req.body.description){
            errors.description="please add  description"
            hasError=true
        }
       
        console.log(errors)
        if( hasError ) {
            return res.render("addPost", {data:req.body, errors})
        }
        connection((err, db)=>{
            if(err) return res.render("/error")
            db.collection("user").insertOne(req.body)
            .then(()=>res.redirect("/"))
            .catch(e=> res.redirect("/error"))
        })
            
    }


    static all = (req, res)=>{
        connection((err, db)=>{
            db.collection("user").find()
            .toArray((e, users)=>{
                if(e) return res.render("err404")
                res.render("all", {
                    pageTitle:"all",
                    users
                })
            })
        })
    }

    static single = (req, res)=>{
        
        
        const userId = req.params.id
        connection((err, db)=>{
            if(err) return res.send(err.message)
            db.collection("user").findOne({_id:new ObjectId(userId)})
            .then(user=> {
                res.render("single", {pageTitle:"single", user})
            })
            .catch(e=> res.send(e.message))
        })
     }

     static edit =  (req, res)=>{
        const userId = req.params.id
        connection((err, db)=>{
            if(err) return res.send(err.message)
            db.collection("user").findOne({_id:new ObjectId(userId)})
            .then(user=> {
                res.render("edit", {pageTitle:"single", user})
            })
            .catch(e=> res.send(e.message))
        })
    }
    static editLogic = (req, res)=>{
        console.log("edddddddddiiit")
        const userId = req.params.id
        connection((err, db)=>{
            if(err) return res.send(err.message)
            db.collection("user").updateOne(
                {_id:new ObjectId(userId)},
                { $set : req.body }
            )
            .then(user=> {
                res.redirect(`/single/${userId}`)
            })
            .catch(e=> res.send(e.message))
        })
    }
    static comment = (req,res) => {
        res.render("comment", {pageTitle:"add comment"})
    }
    static commentLogic = (req,res) => {
        let comment =false
        const userId = req.params.id
        connection((err, db)=>{
            if(err) return res.send(err.message)
            db.collection("user").updateOne(
                
                {_id:new ObjectId(userId)},
                { $push : {comments:req.body} }
                
            )
            .then(user=> {
                comment =true
                res.redirect(`/single/${userId}`)
            })
            .catch(e=> res.send(e.message))
        })
    }





    static del = (req, res)=>{
        const userId = req.params.id
        connection((err, db)=>{
            if(err) return res.send(err.message)
            db.collection("user").deleteOne({_id:new ObjectId(userId)})
            .then(user=> {
                res.redirect("/")
            })
            .catch(e=> res.send(e.message))
        })
    }
}
module.exports = User