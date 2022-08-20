const router = require("express").Router()
const userController = require("../controller/user.controller")

// router.get("/add", userController.add)
router.get("/add", userController.add)
router.post("/add", userController.addLogic)
router.get("/", userController.all)
router.get("/edit/:id",userController.edit)
router.post("/edit/:id",userController.editLogic)
router.get("/single/:id", userController.single)
router.get("/del/:id", userController.del)
router.get("/comment/:id", userController.comment)
router.post("/comment/:id", userController.commentLogic)
module.exports=router