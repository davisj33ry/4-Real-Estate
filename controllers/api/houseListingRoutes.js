const router = require('express').Router();
const { Project } = require('../../models');
// CREATE new listing
router.get('/new', async (req, res) => {
    try {
        res.render('submit');
        // const newListing = await Project.create({
        //     address: req.body.address,
        //     price: req.body.price,
        //     city: req.body.city,
        //     state: req.body.state,
        //     zipcode: req.body.zipcode,
        //     price: req.body.price,
        // });
        // req.session.save(() => {
        //     req.session.loggedIn = true;
    
        //     res.status(200).json(newListing);
        // });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}); 

module.exports = router;
