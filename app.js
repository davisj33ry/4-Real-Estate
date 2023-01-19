const express = require('express');
const app = express();
const routes = require('./routes');

// Middleware and other application level configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes);

module.exports = app;
