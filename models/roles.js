const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: true,
    unique: true
  }
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;



// for the roles id i want to assign the roles of admin facility manager facility team building user and vendor pls can i assign it in the mongodb schema or controller for role and if any pls provide me the code