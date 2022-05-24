const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send("<h1>Welcome To TechCyberSimple</h1>");
});

app.get("/new",(req,res)=>{
    res.send("Router is Working ...");
});


app.listen(PORT,()=>console.log(`Server is Started at ${PORT}`));


module.exports = app;