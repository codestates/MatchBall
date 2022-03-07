const express = require('express');
const router = express.Router();
const Controller = require('../controllers/matches')

router.post('/new', Controller.new);
router.patch('/edit/:matchid', Controller.edit.patch);
router.get('/edit/:matchid', Controller.edit.get)
router.get('/:matchid', Controller.get)
router.delete('/delete', Controller.delete)
router.post('/:matchid', Controller.post)
router.patch('/cancel', Controller.cancel)
router.get('/main', Controller.main)

module.exports = router;
