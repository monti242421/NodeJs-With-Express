
const express = require('express');
const app = express();
app.use((req,res,next)=>{
    console.log("In the MiddleWare");
    next(); //allows the request to contnue to next middleware in line
});

app.use((req,res,next)=>{
    console.log("In another MiddleWare");
    res.send('<h1>Hello from Express</h1>');
});

app.listen(4000);

