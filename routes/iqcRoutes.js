const express = require('express');
const router = express.Router();
const controller = require('../controllers/iqcController');

router.get('/', controller.generateImage);

module.exports = router;

