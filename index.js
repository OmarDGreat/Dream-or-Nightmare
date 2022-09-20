var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var hbs = require('express-handlebars'); 
var path = require('path'); 
var flash = require('connect-flash')
const router = require('./controllers');


// invoke an instance of express application.

var app = express();

// set our application port
app.set('port', 9000);

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));
app.use(flash());

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

const handlebars = hbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs'); 
// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});

//flash message middleware
app.use((req, res, next)=>{
    res.locals.message = req.session.message
    delete req.session.message
    next()
  })

app.use(router);
 

// route for Home-Page

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});


// start the express server
app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`));