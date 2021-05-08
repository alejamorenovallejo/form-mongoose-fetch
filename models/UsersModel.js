const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userGithub:String,
  email:String,
});
module.exports = mongoose.model("User", userSchema);