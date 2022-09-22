const router = require("express").Router();
const { User, Dream } = require("../../models");
const sequelize = require("../../config/connection");

router.get("/", (req, res) => {
    res.render("post-dream");
});


// GET all dreams
router.get("/all_dream", (req, res) => {
    Dream.findAll({
        attributes: [
            "id",
            "title",
            "dream_story",
            "upvote",
            "downvote",
            "created_at",
        ],
        order: [["created_at", "DESC"]],
        include: [
            {
                model: User,
                attributes: ["username"],
            },
        ],
    })
        .then(((dbDreamData) => res.json(dbDreamData)))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


// get one user
router.get("/all_dream/:id", (req, res) => {
  Dream.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "dream_story",
      "created_at",
      "upvote",
      "downvote",
    ],
  })
    .then(singleDreamStory => {
      const dreams = singleDreamStory.get({ plain: true });
      res.render("homepage", {
      dreams,
      loggedIn: req.session.loggedIn
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });
});
// Dream /api/dreams
router.post("/", (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Dream.create({
    title: req.body.title,
    dream_story: req.body.dream_story,
    // user_id: req.body.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// DELETE /api/posts/id
router.delete("/:id", (req, res) => {
  Dream.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No Dream found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// post /api  FOR UPVOTE/DOWNVOTE
router.post("/", (req, res) => {
  Dream.create({
    id: req.body.id,
    upvote: req.body.upvote,
    downvote: req.body.downvote,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post /api
router.post("/", (req, res) => {
});
  
module.exports = router;
