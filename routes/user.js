const express = require('express');
const router = require('express').Router();
const userController = require('../controllers/user');

router.post('/', userController.newUser);
// router.delete('/', userController.newUser)

router.post('/login', userController.userLogin)

router.post('/logout', userController.userLogout)
