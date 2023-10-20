const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  hashPassword: String,
  name: String,
  place: String,
  ProfilePic: String,
  CoverPic: String,
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
