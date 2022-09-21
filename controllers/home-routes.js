const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Dream} = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Dream.findAll({
    attributes: [
      'id',
      'title',
      'dream_story',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbDreamData => {
    const dreams = dbDreamData.map(dream => dream.get({ plain: true }));
    res.render('homepage', {
      dreams,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
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
      const dream = dbDreamData.get({ plain: true });
      res.render('single-dream', {
        dream,
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
