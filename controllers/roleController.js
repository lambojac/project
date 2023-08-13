const Role = require('../models/roles');

const RoleController = {
  createPredefinedRoles: async (predefinedRoles) => {
    try {
      for (const roleName of predefinedRoles) {
        await Role.create({ roleName });
      }
      console.log('Predefined roles created successfully.');
    } catch (error) {
      console.error('Error creating predefined roles:', error);
    }
  },

  getAllRoles: async (req, res) => {
    try {
      const roles = await Role.find();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  createRole: async (req, res) => {
    const { roleName } = req.body;

    if (!roleName) {
      res.status(400).json({ error: 'Role name is required' });
      return;
    }

    try {
      const newRole = await Role.create({ roleName });
      res.json(newRole);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = RoleController;