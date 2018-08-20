const Item = require('../models/items')
const jwt = require("jsonwebtoken");

class ItemController {

    static createItem(req, res) {
        let token = req.headers.token
        let decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(req.body);
        console.log(req.headers.token);
        

        Item.create({
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            tags: req.body.tags.split(" "),
            userId: decode.id
        })
        .then((item) => {
            res.status(201).json({
                    name: item.name,
                    price: item.price,
                    stock: item.stock,
                    tags: item.tags,
                    user: item.userId
            })  
        })
        .catch((err) => {
            res.status(400).json({
                error: "You are not authorized to access this API"
            })
        });
        
    }

    static findItem(req, res) {
        let harga = req.params.price
        Item.find({})
        .then((data) => {
            // data.forEach(element => {
                
            // });
            console.log(data);
            
            
        }).catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
    }
}

module.exports = ItemController