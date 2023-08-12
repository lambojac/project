const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName:{
    type:String,
  required:true
  },

  lastName:{ 
    type:String,
    required:true
  },

  username:{
    type:String,
    required:true},

  password:{type:String,
    required:true},
  // roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

      "Please enter a valid email",
    ],
  },
  phone: String,
  timezone: String,
  language: String,
});
module.exports = mongoose.model("Usr", userSchema);
