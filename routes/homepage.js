const express = require('express');
const router = express.Router();
const controllerHomepage = require('../controllers/homepage');

router.get('/', controllerHomepage.homepage);

module.exports = router;