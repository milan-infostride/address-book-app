const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const errorHandlingFunction = require("../util/errorHandlingFunction");

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
          newUser.password = bcrypt.hashSync(req.body.password, 12);
          let user = new User(newUser);
          return user.save();
        } else {
          res.status(500).json({ message: "user already exist" });
        }

        //currentUser = res;
      })
      .then((result) => {
        console.log("user Added");
        res.status(201).json({ message: "user Added successfully" });
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
          return bcrypt.compare(req.body.password, user.password);
        } else {
          // console.log("I am here")
          const error = new Error();
          error.message = "user not found...!!";
          error.statusCode = 404;
          throw error;
        }
      })
      .then((isValid) => {
        console.log("isValid", isValid);
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
            user_token: token,
            user_id: currentUser._id.toString(),
          });
        } else {
          const error = new Error();
          error.message = "Wrong Password";
          error.statusCode = 402;
          throw error;
        }
      })
      .catch((err) => {
        errorHandlingFunction(err, res);
      });
  },
};

module.exports = userController;
