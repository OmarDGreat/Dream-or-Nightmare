const path = require('path');
const express = require('express');
<<<<<<< HEAD
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');

=======
const session = require('express-session');
const exphbs = require('express-handlebars');
>>>>>>> testing-branch

// Import sequelize connection
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create();

//following code adds template engine functionality.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
  });

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

//handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//express
app.use(express.json());
<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

// turn on routes
app.use(routes);
=======
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));
>>>>>>> testing-branch

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});