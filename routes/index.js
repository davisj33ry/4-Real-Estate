const routes = require('express').Router();
const controllerUser = require('../routes/user');
const controllerHomepage = require('../routes/homepage');
// const controller2 = require('../routes/houseListing');

routes.use('/login', controllerUser);
routes.use('/', controllerHomepage);
// routes.use('/',controller2);

module.exports = routes;
