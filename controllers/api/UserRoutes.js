const router = require('express').Router();
const { User } = require('../../models');

// '/api/users' route

// create new user
router.post('/', async (req, res) => {
    try {
      const newUserData = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      const dataJustCreated = await User.findOne({
        where: { email: newUserData.email },
      });
      console.log(dataJustCreated);

      req.session.save(() => {
        req.session.user_id = dataJustCreated.id;
        req.session.logged_in = true;
        res.status(200).json(newUserData);
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

// initial login
router.post('/login', async (req, res) => {
    try {
      const userInput = await User.findOne({
        where: { email: req.body.email },
      });

      if (!userInput) {
        res
          .status(400)
          .json({ message: 'Invalid username, please try again.' });
        return;
      };

      const validPassword = await userInput.checkPassword(
        req.body.password
      );

      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Invalid password, please try again.' });
        return;
      };

      req.session.save(() => {
        req.session.user_id = userInput.id;
        req.session.logged_in = true;
        res.json({
          user: userInput,
          message: 'You are now logged in!',
        });
      });
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
        console.log('LOGGED OUT BITCH!!!')
    } else {
        res.status(404).end();
    }
});

module.exports = router;