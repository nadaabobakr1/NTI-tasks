const User= require("../controllers/user.controller")
const router = require("express").Router()
router.get("/", User.index)
router.post("/register", User.create)
router.get("/single/:id", User.single)
router.delete("/single/:id", User.delete)
router.patch("/single/:id", User.edit) //put
module.exports = router
