const express = require('express');
const router = express.Router();
const candiesController = require('../controllers/candiesController');

router.get('/', candiesController.index);
router.get('/new', candiesController.new);

router.get('/:id', candiesController.show);
router.post('/', candiesController.create);
router.delete('/:id', candiesController.delete);

module.exports = router;