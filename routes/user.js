const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');


router.post('/login', userController.createNewUser);
// router.delete('/', userController.newUser)

router.post('/login', userController.userLogin)

router.post('/logout', userController.userLogout)

module.exports = router;

