const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// Compile model from schema
module.exports = mongoose.model('Users', UserSchema);
