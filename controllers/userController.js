const User = require('../models/user');
const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().populate('roleId', 'roleName');
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  createUser: async (req, res) => {
    const {firstName, lastName, username, password, email, phone,timezone,language}=req.body
    if(!firstName||!lastName||!username||!password||!email||!phone||!timezone||!language){
    res.status(400)
    throw new Error("All fields mustbe filled correctly")
      }
      
    try {
      const newUser = await User.create({firstName, lastName, username, password, email, phone, timezone, language});
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({message:error.message})
      
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('roleId', 'roleName');
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = UserController;