const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Dream} = require('../models');

//render homepage
router.get('/', (req, res) => {
  res.render('homepage');
});

// get one post

router.get('/dream/:id', (req, res) => {
  Dream.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'dream_story',
      'created_at'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbDreamData => {
    if (dbDreamData) {
      const dreams = dbDreamData.get({ plain: true });
      res.render('homepage', {
        dreams,
        loggedIn: req.session.loggedIn
      });
    } else {
      res.status(404).end();
    }
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

// login
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// signup
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
