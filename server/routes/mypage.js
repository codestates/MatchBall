const express = require('express');
const router = express.Router();
const Controller = require('../controllers')

router.post('/matches', Controller.matches);
router.post('/orders', Controller.orders);
router.patch('/edit', Controller.myedit)
router.delete('/out', Controller.out)

module.exports = router;
