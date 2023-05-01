const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// GET FOR HOME PAGE ROUTE
router.get('/', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll();
        const blogPosts = blogPostData.map((bPost) =>
            bPost.get({ plain: true })
        );
        res.render('homepage', {
            blogPosts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET FOR DASHBOARD
router.get('/dashboard', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll({
            include: [
                {
                  model: User,
                  attributes: ['username'],
                },
              ],
        });
        const blogPosts = blogPostData.map((bPost) => 
        bPost.get({ plain: true })
        );
        res.render('dashboard', {
            blogPosts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
