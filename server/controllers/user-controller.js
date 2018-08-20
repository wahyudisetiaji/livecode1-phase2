const User = require("../models/users");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UserController {
  static register(req, res) {
    if (req.body.password === undefined || req.body.password.length <= 6) {
      res.status(400).json({
        message: "password is required & password min length 6"
      });
    }
    const salt = bcryptjs.genSaltSync(8);
    const newPassword = bcryptjs.hashSync(req.body.password, salt);

    User.create({
      username: req.body.username,
      password: newPassword,
    })
    .then((data) => {
        res.status(201).json({
            success: true,
            message: `Account ${data.username} registered`
        })
        
    }).catch((err) => {
        res.status(400).json({
            message: err.message
        })
    });
  }

  static request_token(req, res) {
    if (req.body.password === undefined || req.body.password.length <= 6) {
        res.status(400).json({
          message: "password is required & password min length 6"
        });
      }
      User.find({username: req.body.username})
      .then((user) => {
        const userToken = jwt.sign(
            {
              id: user[0]._id,
              username: user[0].username,
            },
            process.env.JWT_SECRET_KEY
          );
          
          res.status(201).json({
              token: userToken,
          })
          
      }).catch((err) => {
          res.status(400).json({
              message: err.message
          })
      });
    }

}

module.exports = UserController
