const router = require('express').Router();
const { User } = require('../../models');

// '/api/user' route
// LOGIN
router.post('/login', async (req, res) => {
    try {
        const inputData = await User.findOne({ where: { username: req.body.username } });
        if (!inputData) {
            res.status(400).json({ message: 'Invalid username or password' });
            return;
        }
        const correctPassword = await inputData.verifyPassword(req.body.password);
        if (!correctPassword) {
            res.status(400).json({ message: 'Invalid password, please try again' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = inputData.id;
            req.session.logged_in = true;
            res.status(200).json({ message: 'Logged in successfully' });
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// LOGOUT
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;