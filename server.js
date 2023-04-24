require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const router = require('./routes/taskRouter')

const app = express()

//middleware
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("server is connect to database and listening to port 4000")
    })
})
.catch((error) => {
    console.log(error)
})

app.use('/api', router)