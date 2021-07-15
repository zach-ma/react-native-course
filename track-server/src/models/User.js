const mongoose = require("mongoose");

// define what a user is
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// associate with mongoose
mongoose.model("User", userSchema);
