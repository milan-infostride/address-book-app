const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
  signUpUser: (req, res, next) => {
    //console.log('req = ',req);
    let currentUser = null;
    console.log("email = ", req.body.email);
    User.findByEmail(req.body.email)
      .then((result) => {
        console.log("findone result:", result);
        if (result) currentUser = result;
        if (!currentUser) {
          let newUser = {};
          newUser.profile_url = req.body.profile_url;
          newUser.bio = req.body.bio;
          newUser.number = req.body.number;
          newUser.groups = [];
          newUser.email = req.body.email;
          newUser.chat_areas = [];
          let user = new User(newUser);
          return user.save();
        } else {
          res.json({ message: "user already exist" });
        }

        //currentUser = res;
      })
      .then((result) => {
        console.log("user Added");
        res.json({ message: "user Added successfully" });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  loginUser: (req, res, next) => {
    let currentUser = null;
    User.findByEmail(req.body.email)
      .then((user) => {
        if (user) {
          currentUser = user;
          return bcrypt.compare(req.password, user.password);
        } else {
          const error = new Error("user not found...!!");
          error.statusCode = 404;
          throw error;
        }
      })
      .then((isValid) => {
        if (isValid) {
          const token = jwt.sign(
            {
              user_id: currentUser._id.toString(),
              user_email: currentUser.email,
            },
            "meraSecret",
            { expiresIn: "1h" }
          );
          res.status(201).json({
            message: "Logged in",
            userToken: token,
            userId: currentUser._id.toString(),
          });
        } else {
          const error = new Error("Wrong Password");
          error.statusCode = 402;
        }
      });
  },
};

module.exports = userController;
