const router = require("express").Router();
const { User, Dream } = require("../../models");

// GET /api/dreams
router.get("/", (req, res) => {
    Dream.findAll({
        attributes: ["id", "title", "dream_story", "user_id", "upvote", "downvote"],
        include: [
            {
                model: User,
                attributes: ["username"],
            },
        ],
    })
        .then((dbDreamData) => res.json(dbDreamData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/dreams/1
router.get("/:id", (req, res) => {
    Dream.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ["id", "title", "dream_story", "user_id", "upvote", "downvote"],
        include: [
            {
                model: User,
                attributes: ["username"],
            },
        ],
    })
        .then((dbDreamData) => {
            if (!dbDreamData) {
                res.status(404).json({ message: "No dream found with this id" });
                return;
            }
            res.json(dbDreamData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/dreams
router.post("/", (req, res) => {
    Dream.create({
        title: req.body.title,
        dream_story: req.body.dream_story,
        user_id: req.body.user_id,
    })
        .then((dbDreamData) => res.json(dbDreamData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/dreams/1
router.put("/:id", (req, res) => {
    Dream.update(
        {
            title: req.body.title,
            dream_story: req.body.dream_story,
            user_id: req.body.user_id,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
        .then((dbDreamData) => {
            if (!dbDreamData) {
                res.status(404).json({ message: "No dream found with this id" });
                return;
            }
            res.json(dbDreamData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/dreams/1
router.delete("/:id", (req, res) => {
    Dream.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((dbDreamData) => {
            if (!dbDreamData) {
                res.status(404).json({ message: "No dream found with this id" });
                return;
            }
            res.json(dbDreamData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;

