const express = require("express")
const app = express()

app.use(express.static(__dirname))

app.listen(80,function(){
    console.log("Server is running!")
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.htm")
})