const router = require("express").Router();
const { Project } = require("../models");

// GET all listings for homepage
router.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll({
      attributes: ['price', 'address', 'listing_id']
    });
    console.log(projects);
    res.render("homepage", { projects });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
