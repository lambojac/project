const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  email: String,
  phone: String,
  timezone: String,
  language: String,
});
module.exports = mongoose.model('Usr', userSchema);