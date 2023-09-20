
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<h1><form action="/product" method="POST"><Input type "text" name = "title"><Input type "text" name = "size"><button type="submit">Submit</button> </form></h1>');
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from Express</h1>');
});

app.listen(4000);

