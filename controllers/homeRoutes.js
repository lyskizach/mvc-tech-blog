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
            // logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET FOR DASHBOARD
router.get('/dashboard', withAuth, async (req, res) => {
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

// SIGN UP
router.post('/signup', async (req, res) => {
    try {
        const newUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.logged_in = true,
            res.status(200).json(newUserData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// REDIRECT TO HOMEPAGE IF ALREADY LOGGED IN
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
});

module.exports = router;
