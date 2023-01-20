const express = require('express');
const router = express.Router();
const controllerHomepage = require('../controllers/homepage');

router.get('/home', controllerHomepage.homepage);

module.exports = router;