const energy = require('./src/routes/energy');

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(energy);

module.exports = app;