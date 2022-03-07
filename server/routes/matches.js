const express = require('express');
const router = express.Router();
const Controller = require('../controllers')

router.post('/new', Controller.new);
router.patch('/edit/:matchid', Controller.edit.patch);
router.get('/edit/:matchid', Controller.edit.get)
router.post('/', Controller.matchget)
router.delete('/delete', Controller.delete)
router.post('/:matchid', Controller.matchpost)
router.patch('/cancel', Controller.cancel)
router.get('/list', Controller.list)

module.exports = router;
