const express = require('express');
const router = require('express').Router();
const houseListing = require('../controllers/houseListing');

router.get('/', houseListing.id);
// router.delete('/', userController.newUser)

router.post('/login', userController.userLogin)

router.post('/logout', userController.userLogout)
