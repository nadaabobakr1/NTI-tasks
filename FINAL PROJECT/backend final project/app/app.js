const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
require("./database/connection")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const staticDir = `${__dirname}/images`
app.use(express.static(staticDir))
const userRoutes = require("./routes/user.routes")
const blogRoutes = require("./routes/blog.routes")
app.use("/user",userRoutes)
app.use("/blog",blogRoutes)

module.exports = app