
const { json } = require("body-parser");

const db = require('../util/database');


module.exports = class Product{
    constructor(t){
        this.title = t;
    }
    save(){
        return db.execute('INSERT INTO products (title,price,description,imageUrl) VALUES(?,?,?,?)',[this.title,12.5,"as","asa"])
    }

    static fetchAll(){
        return db.execute('SELECT * FROM products')
    }
}