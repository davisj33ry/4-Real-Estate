const router = require('express').Router();
const { Project } = require('../../models');
// render new listing page
router.get('/new', async (req, res) => {
    res.render('submit')
});

// CREATE new listing
router.post('/create', async (req, res) => {
    try {
        res.render('submit');
        const newListing = await Project.create({
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipCode,
            price: req.body.price,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
    
            res.status(200).json(newListing);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}); 

module.exports = router;
