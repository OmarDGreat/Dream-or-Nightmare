const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Dream} = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Dream.findAll({
    where: {
      user_id: req.session.user_id
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
    const dreams = dbDreamData.map(dream => dream.get({ plain: true }));
    res.render('dashboard', { dreams, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get one post
router.get('/edit/:id', withAuth, (req, res) => {
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

      res.render('edit-dream', {
        dream,
        loggedIn: true
      });
    } else {
      res.status(404).end();
    }
  })
  .catch(err => {
    res.status(500).json(err);
  });
});


module.exports = router;