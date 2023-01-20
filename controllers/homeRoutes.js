const router = require('express').Router();
const { Project } = require('../models');

// GET all listings for homepage
router.get('/', async (req, res) => {
  try {
    const dbHomeListings = await Project.findAll({
      // include: [
      //   {
      //      address: req.body.address,
      //       price: req.body.price,
      //       city: req.body.city,
      //       state: req.body.state,
      //       zipcode: req.body.zipcode,
            
      //   },
      // ],
    });

    const galleryList = dbHomeListings.map((galleryList) =>
      galleryList.get({ plain: true })
    );

    res.render('homepage', galleryList);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
