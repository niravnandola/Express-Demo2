const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()
const server = express()
const port = process.env.PORT


server.use(bodyParser.json())

server.get("/",(req,res)=>{
    return res.send("server is running")
})


server.use('/api',require("./routes"))


server.listen(port,()=>{
    console.log(`http://localhost:${port}`);
    
})