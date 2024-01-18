const express = require('express');
const router = express.Router();
const { readEnergy } = require('./api/get');

router.get('/energy/:year/:month', readEnergy);

module.exports = router;