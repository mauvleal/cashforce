const express = require('express');

const User = require('../controllers/user.controller');

const router = express.Router();

router
  .get('/:id', User.getUserById);

module.exports = router;