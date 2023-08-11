const Role = require('../models/roles');

const RoleController = {
  getAllRoles: async (req, res) => {
    try {
      const roles = await Role.find();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  createRole: async (req, res) => {
    try {
      const newRole = await Role.create(req.body);
      res.json(newRole);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = RoleController;