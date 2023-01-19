const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

// Middleware and other application level configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/', routes);

module.exports = app;
