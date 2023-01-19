const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');


router.post('/', userController.createNewUser);
// router.delete('/', userController.newUser)

// router.post('/login', UserService.userLogin)

// router.post('/logout', UserService.userLogout)

module.exports = router;