const router = require('express').Router();
const { Project } = require('../../models');

router.post('/new',  async (req, res) => {
  
    try {
    
      const newListing = await Project.create({
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            price: req.body.price,
        });
        
      res.status(200).json(newListing);

    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
