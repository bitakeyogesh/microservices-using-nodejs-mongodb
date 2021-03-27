const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/user/add', userController.addUser);
router.get('/users', userController.getAllUsers);
router.get('/user/:uuid', userController.getUserById);
router.put('/user/:uuid', userController.updateUserById);
router.delete('/user/:uuid', userController.deleteUserById);

module.exports = router;
