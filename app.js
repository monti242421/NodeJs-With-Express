
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");
const errorController = require('./controller/error')
const db = require('./util/database');

db.execute('SELECT * FROM products')
.then(result=>{
    console.log(result[0]);
})
.catch(err=>{console.log(err)});

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404)


app.listen(4000);

