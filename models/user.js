const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const userSchema = new mongoose.Schema({
  userId: { 
    type: String,
     unique: true, 
     required: true
     },
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

    role:{
type:String,
required:true,
    },

  password:{type:String,
    required:true},
    roleId: { 
      type:Number, 
      required:true,
      ref: 'Role'
     },
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
  timezone: { type: String, default: Intl.DateTimeFormat().resolvedOptions().timeZone },
  language: String,
},{timestamps:true});

userSchema.pre(
  'save',
  async function (next) {
      const user = this;
      const hash = await bcrypt.hash(this.password, 10);

      this.password = hash;
      next();
  }
);

// You will also need to make sure that the user trying to log in has the correct credentials. Add the following new method:
userSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
}
module.exports = mongoose.model("Usr", userSchema);

