const express = require('express');
const router = express.Router();
const Controller = require('../controllers')

router.post('/signup', Controller.signup);
router.post('/signin', Controller.signin);
router.post('/signout', Controller.signout)
router.post('/auth', Controller.auth)

module.exports = router;
