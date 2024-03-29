const express = require("express");
const cors = require("cors");
const calculator = require('./src/routes/calculator');

const app = express();

app.use(express.json());
app.use(cors());
app.use(calculator);

module.exports = app;
