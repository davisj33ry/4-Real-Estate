const router = require('express').Router();

const userRoutes = require('./userRoutes');
const houseListing = require('./houseListingRoutes');

router.use('/users', userRoutes);
router.use('/listing', houseListing);


module.exports = router;
