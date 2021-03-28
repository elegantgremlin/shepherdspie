const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.post('/register', async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);

  const user = new User({ ...req.body, password: hash });
  user.save();
  res.json(user);
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username }).exec();
  if (user === null) return res.sendStatus(401);

  try {
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (valid) {
      const token = jwt.sign(user.username, process.env.SECRET_KEY);
      return res.json({ user, token });
    }
  } catch (err) {
    return res.json(err);
  }

  return res.sendStatus(401);
});

module.exports = router;
