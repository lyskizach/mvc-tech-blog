const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// GET FOR HOME PAGE ROUTE SHOWING ALL BLOGPOSTS
router.get('/', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    console.log(blogPostData, 'get all blogposts');
    const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));

    res.render('home', {
      blogPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET FOR DASHBOARD SAHOWING BLOGPOSTS SPECIFC TO LOGGED IN USER
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: [ 'password' ] },
      include: [
        {model: BlogPost},
      ],
    });
    console.log(userData);

    const user = userData.get({ plain: true });
    console.log(user);

    res.render('dashboard', {
      user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET FOR BLOGPOST BY SPECIFIC ID
router.get('/blogpost/:id', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['content', 'creator_id'],
          include: [
            {
              model: User,
              attributes: ['name'],
            },
          ],
        },
      ],
    });

    console.log(blogPostData);

    console.log('BLOGPOST FETCHED ACCOERDING TO ID');

    const blogPost = blogPostData.get({ plain: true });
    console.log(blogPost);

    res.render('blogpostdisplay', {
      blogPost,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// BLOGPOST INPUT PAGE
router.get('/blogpost_input', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: BlogPost }],
    });
    console.log(userData);

    const user = userData.get({ plain: true });
    res.render('blogpostinput', {
      user,
      logged_in: true,
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
});

// BLOGPOST EDIT PAGE
router.get('/blogpost_edit/:id', withAuth, async (req, res) => {
  try {
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [
        { 
          model: User, 
          exclude: ['password']
        }
      ],
    });

    const blogPost = blogPostData.get({ plain: true });
    console.log(blogPost);

    res.render('blogpostedit', {
      blogPost,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// SIGNUP get route
router.get('/signup', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
});

// REDIRECT TO HOMEPAGE IF ALREADY LOGGED IN
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

module.exports = router;