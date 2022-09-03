const express = require("express");
const app = express();


app.get("/", (req, res)=>{
    res.send("hello world")
})

const port = process.env.port || 3000
app.listen(port, ()=>{
    console.log(`your server is runing in ${port} 3000`)
})