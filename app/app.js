const express = require('express');
const app = express();
const helmet = require("helmet");
const cors = require("cors");

const indexRoute = require('./routes/index.route.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/', indexRoute);

module.exports = app;