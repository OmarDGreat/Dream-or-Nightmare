const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// Import routes and give the server access to them. Moved global variables up.
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const helpers = require('./utils/helpers');

// Import sequelize connection
const app = express();
const PORT = process.env.PORT || 3001;
// const hbs = exphbs.create();

const hbs = exphbs.create({ helpers });

//following code adds template engine functionality. vvv handlebars vvv
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



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


//express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});