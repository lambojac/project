const express = require('express');
const router = express.Router();
const RoleController = require('../controllers/roleController');

router.get('/', RoleController.getAllRoles);
router.post('/', RoleController.createRole);

module.exports = router;