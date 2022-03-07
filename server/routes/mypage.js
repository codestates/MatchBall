const express = require('express');
const router = express.Router();
const Controller = require('../controllers')

router.get('/matches', Controller.matches);
router.get('/orders', Controller.orders);
router.patch('/edit', Controller.myedit)
router.delete('/out', Controller.out)

module.exports = router;
