const express = require('express');
const router = require('express').Router();
const houseListing = require('../controllers/houseListing');
// get all house listings
router.get('/listing/all', houseListing.allListings);
// post new house listing
router.post('/listing/new', houseListing.newListing);)