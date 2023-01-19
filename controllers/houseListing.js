const { Project } = require('../models');
// CREATE new listing
const newListing = async (req, res) => {
    try {
        await Project.create({
            address: req.body.address,
            price: req.body.price,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}; 

// retreive house listing
const getHouseListings = async (req, res) => {
    try {
        const houseListings = await Project.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });