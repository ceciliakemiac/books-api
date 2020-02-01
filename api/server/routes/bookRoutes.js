const express = require('express');
const router = express.Router();

const bookController = require('../controller/bookControler');

router.get('/', bookController.getAll);
router.post('/', bookController.post);
router.put('/:id', bookController.update);
router.get('/:id', bookController.get);
router.delete('/:id', bookController.delete);

module.exports = router;
