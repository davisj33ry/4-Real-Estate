const router = require('express').Router();
const { Project } = require('../models');
// CREATE new listing
router.post('/listing/new', async (req, res) => {
    try {
        const newListing = await Project.create({
            address: req.body.address,
            price: req.body.price,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
            price: req.body.price,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}); 

router.get('/listing/all', async (req, res) => {
    try {
        const allListings = await Project.findAll();
        res.status(200).json(allListings);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});