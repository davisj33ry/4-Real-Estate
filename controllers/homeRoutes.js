const router = require('express').Router();
const { Project} = require('../models');

// GET all listings for homepage
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Project.findAll();

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/listing/new', (req, res) => {
  
  if (req.session.logged_in) {
    res.render('submit', { logged_in: req.session.logged_in});
    return;
  }

});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/listing/new');
    return;
  }

  res.render('login');
});

module.exports = router;
