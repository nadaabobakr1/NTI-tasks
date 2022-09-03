const User= require("../controllers/user.controller")
const auth = require("../middleware/auth.middleware")
const upload = require("../middleware/fileUplod.middleware")

const router = require("express").Router()

router.post("/register", User.create)
router.post("/login", User.login)
router.post("/logout", User.logout)
router.get("/",auth, User.index)
router.get("/single/:id",auth, User.single)
router.delete("/single/:id",auth, User.delete)
router.patch("/single/:id",auth, User.edit) //put

router.get("/profile", auth, User.profile)
router.get("/activate", auth, User.activate)

router.post("/imgUpload",auth, upload.single("myImg"), User.upImg)

module.exports = router
