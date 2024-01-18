require('dotenv').config();
const express = require('express');
const router = express.Router();
const calculatorService = require('../services/calculator');

router.get('/calculator', (req, res) => calculatorService(req, res));

module.exports = router;
