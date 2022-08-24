const Blog= require("../controllers/blog.controller")
const router = require("express").Router()
router.get("/", Blog.index)
router.post("/register", Blog.create)
router.get("/single/:id", Blog.single)
router.delete("/single/:id", Blog.delete)
router.patch("/single/:id", Blog.edit) //put
module.exports = router
