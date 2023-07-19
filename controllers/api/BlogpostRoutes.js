const router = require('express').Router();
const express = require('express');
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

// '/api/blogpost' route
// POST NEW BLOGPOST
router.post('/', async (req, res) => {
    try {
        const newPost = await BlogPost.create({
            title: req.body.title,
            content: req.body.content,
            creator_id: req.session.creator_id,
        });

        res.status(200).json(newPost);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const updateBlogPost = await BlogPost.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: { id: req.params.id }
            },
        );
        res.status(200).json(updateBlogPost);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        await BlogPost.destroy({
            where: { id: req.params.id },
        });
        res.status(200).json({ message: 'BLOGPOST DELETED HUN '});

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;