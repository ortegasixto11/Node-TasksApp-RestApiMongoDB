const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    password: String,
    is_active: Boolean,
});

module.exports = mongoose.model("User", UserSchema);
