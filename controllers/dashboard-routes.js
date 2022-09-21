const router = require('express').Router();
const sequelize = require('../config/connection');
const homepage = '../views/homepage.handlebars'

router.get('/homepage',(req,res)=>{
  res.render(homepage)
});


// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
      res.redirect("/dashboard");
    } else {
      next();
    }
  };

router.get("/", sessionChecker, (req, res) => {
    res.redirect("/login");
  });
  
  // route for user signup
  router
    .route("/signup")
    //.get(sessionChecker, (req, res) => {
    .get((req, res) => {
      //res.sendFile(__dirname + '/public/signup.html');
      res.render("signup", hbsContent);
    })
    .post((req, res) => {
      User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      })
        .then((user) => {
          req.session.user = user.dataValues;
          res.redirect("/dashboard");
        })
        .catch((error) => {
          res.redirect("/signup");
        });
    });
  
  // route for user Login
  router
    .route("/login")
    .get(sessionChecker, (req, res) => {
      //res.sendFile(__dirname + '/public/login.html');
      res.render("login", hbsContent);
    })
    .post((req, res) => {
      var email = req.body.email,
        password = req.body.password;
  
      User.findOne({ where: { email: email } }).then(function (user) {
        if (!user) {
          req.session.message = {
            type: "danger",
            intro: "User does not Exist!!!  ",
            message: "Please go to our SignUp Page",
          };
          res.redirect("/login");
        } else if (!user.validPassword(password)) {
          req.session.message = {
            type: "danger",
            intro: "Password and Email do not match! ",
            message:
              "Please make sure to insert the correct username and password.",
          };
          res.redirect("/login");
        } else {
          req.session.user = user.dataValues;
          res.redirect("/dashboard");
        }
      });
    });
  
  // route for user's dashboard
  router.get("/dashboard", (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      hbsContent.loggedin = true;
      hbsContent.userName = req.session.user.username;
      //console.log(JSON.stringify(req.session.user));
      console.log(req.session.user.username);
      hbsContent.title = "You are logged in";
      //res.sendFile(__dirname + '/public/dashboard.html');
      res.render("index", hbsContent);
    } else {
      res.redirect("/login");
    }
  });
  
  router.get("/logout", (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      hbsContent.loggedin = false;
      hbsContent.title = "You are logged out!";
      res.clearCookie("user_sid");
      console.log(JSON.stringify(hbsContent));
      res.redirect("/");
    } else {
      res.redirect("/login");
    }
  });
  
module.exports = router;