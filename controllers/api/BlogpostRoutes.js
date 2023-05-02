const router = require('express').Router();
const { BlogPost } = require('../../models');

// '/api/blogpost' route
// POST NEW BLOGPOST
router.post('/blogpost', async (req, res) => {
    try {
        const newPost = await BlogPost.create({
            title: req.body.title,
            content: req.body.content,
            // creator_id: '',
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;