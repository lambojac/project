const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
router.get('/id', UserController.getAllUsers);
router.post('/create', UserController.createUser);
router.get('/:id', UserController.getUserById);
router.put('/update', UserController.updateUser);
router.delete('/delete', UserController.deleteUser);
module.exports = router;